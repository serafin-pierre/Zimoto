import React, { useState, useEffect } from "react";
import { filterGuidesThunk } from '../../actions/guides'
import { useDispatch } from 'react-redux'
import { fetchCountryList } from "../../apis/countries";

function Filters() {
  const dispatch = useDispatch()

  const [countriesData, setCountriesData] = useState([])
  
  const getCountries = () => countriesData.map(item => item.country)
  const getcities = (country) => {
    if(countriesData.length !== 0 && country !== '') {
      const countryData = countriesData.find(item => item.country === country)
      return countryData.cities
    } else {
      return []
    }
  }

  const [filters, setFilters] = useState({
    country: '',
    city: '',
    language: '',
    minFee: '',
    maxFee: '',
    minRating: '',
    maxRating: ''
  })

  const formConfig = [
    {
      keyName: 'minFee',
      displayName: 'Fee from',
      type: 'number'
    },
    {
      keyName: 'maxFee',
      displayName: 'Fee to',
      type: 'number',
    },
    {
      keyName: 'minRating',
      displayName: 'Rating from',
      type: 'number'
    },
    {
      keyName: 'maxRating',
      displayName: 'Rating to',
      type: 'number'
    },
    {
      keyName: 'country',
      displayName: 'Country',
      type: 'selection',
      options: getCountries()
    },
    {
      keyName: 'city',
      displayName: 'City',
      type: 'selection',
      options: getcities(filters.country)
    },
    {
      keyName: 'language',
      displayName: 'Language',
      type: 'text',
    },
  ]

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(filterGuidesThunk(filters))
  }

  function handleChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  // List of countries features
  

  useEffect(() => {
    fetchCountryList()
      .then(result => {
        setCountriesData(result)
      })
  }, [])

  return(
    <div className=" flex justify-center lg:w-2/3 mx-auto">
      <form onSubmit={handleSubmit} className=" grid grid-cols-1 md:grid-cols-2 ">

        {formConfig.map(field => 
          <div key ={field.keyName} className=" flex justify-end pb-4" >
            <label htmlFor={field.keyName} className=" px-2"> {field.displayName}: </label>
            
            {
              //for text adn number fields render input tag
             (field.type !== 'selection') ? 
             <input type= {field.type} name={field.keyName} value={filters[field.keyName]} placeholder= 'Any' onChange= {handleChange} className =" w-7/12 lg:w-1/2" />
              :
              //for selection render list of option
            <select name={field.keyName} value={filters[field.keyName]} onChange= {handleChange} className ="  w-7/12 lg:w-1/2">
              <option value = '' > Any </option>
              {field.options.map((option, index) =>
                <option key={index} value={option} > {option} </option>
              )}
            </select>
              
            }
          </div>
        )}

        <button className=" bg-slate-900/20 hover:bg-slate-900/40 duration-150 p-1 w-1/2 justify-self-end"> Apply filter </button>
      </form>
    </div>
  )
}

export default Filters