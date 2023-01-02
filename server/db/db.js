const connection = require('./connection')

function getAverageRating(db = connection) {
  return db('reviews')
    .select('guide_id')
    .avg('rating AS averageRating')
    .groupBy('guide_id')
    .as('averageRatings')
}

function getGuides(db = connection) {
  return db('guides')
  .select(
    'guides.id as id',
    'name',
    'bio',
    'language',
    'fee',
    'contact_number AS contactNumber',
    'email', 
    'averageRating',
    'picture_url'
    )
  .leftJoin(getAverageRating(), 'guide_id', 'guides.id')
  .limit(20)
}


//******** FILTER GUIDES ******//

function getFilteredRatings(minRating, maxRating, db = connection) {
    return db.select()
    .from(getAverageRating())
    .modify(query => {
      if(minRating) {
        query.where('averageRating', '>=', Number(minRating))
      }
      if(maxRating) {
        query.where('averageRating', '<=', Number(maxRating))
      }
    })
    .as('filteredRatings')
}

function getFilteredLocations(country, city, db = connection) {
  return db('locations')
  .select('country', 'city', 'guide_id')
  .modify(query => {
    if(country) {
      query.where('country', 'like', '%' + country + '%')
    }
    if(city) {
      query.where('city', 'like', '%' + city + '%')
    }
  })
  .as('filteredLocations')
}

function getFilteredGuides(filters, db = connection) {
  const {country, city, language, minFee, maxFee, minRating, maxRating} = filters

  return db('guides')
    .distinct(
      'guides.id as id',
      'name',
      'bio',
      'language',
      'fee',
      'contact_number AS contactNumber',
      'email', 
      'averageRating',
      'picture_url'
    )
    .join(getFilteredRatings(minRating, maxRating), 'filteredRatings.guide_id', 'guides.id')
    .join(getFilteredLocations(country, city),'filteredLocations.guide_id', 'guides.id')
    .modify(query => {
      if(language) {
        query.where('language', 'like', '%' + language + '%')
      }
      if(minFee) {
        query.where('fee', '>=', Number(minFee))
      }
      if(maxFee) {
        query.where('fee', '<=', Number(maxFee))
      }
    })
}

module.exports = {
  getGuides,
  getFilteredGuides
}