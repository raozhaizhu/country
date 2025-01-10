// ./src/components/Calculator.jsx
import React, { useState } from 'react';
import countries from '../data.json';
import { Link } from 'react-router-dom';

const Component1 = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark');
    };
    const [region, setRegion] = useState('Filter by Region');

    const filteredCountries = countries.filter((country) => region === 'Filter by Region' || country.region === region);

    return (
        <section id='coutries'>
            <main className='py-[2rem] '>
                <div className='flex justify-between items-center mb-[1.5rem]'>
                    {/* Search Bar */}
                    <div className='serachBar px-[1.6rem] py-[0.8rem] shadow'>
                        <i className='fas fa-search mr-[1rem]'></i>
                        <input type='text' placeholder='Search for a country' />
                    </div>
                    {/* Select Dropdown */}
                    <div className='relative'>
                        <select
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                            className='pl-[1.6rem] pr-[3.2rem] py-[0.8rem] shadow'
                        >
                            <option value='Filter by Region'>Filter by Region</option>
                            <option value='Africa'>Africa</option>
                            <option value='Asia'>Asia</option>
                            <option value='Americas'>Americas</option>
                            <option value='Europe'>Europe</option>
                            <option value='Oceania'>Oceania</option>
                        </select>
                        <i className='fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none'></i>
                    </div>
                </div>
                {/* Countries List */}
                <div className='grid grid-cols-4 gap-[1.5rem]'>
                    {filteredCountries.map((country, index) => (
                        <div key={index} className='countryCard shadow'>
                            <Link to={`/country/${country.name}`}>
                                <img src={country.flag} alt={country.name} className='w-full h-[10rem] object-cover' />
                                <div className='p-[1rem]'>
                                    {' '}
                                    <h2 className='font-bold mb-[1rem]'>{country.name}</h2>
                                    <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                        Population:
                                        <span className='text-[0.8rem] font-light'>
                                            {' '}
                                            {country.population.toLocaleString()}
                                        </span>
                                    </p>
                                    <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                        Region:
                                        <span className='text-[0.8rem] font-light'> {country.region}</span>
                                    </p>
                                    <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                        Capital:
                                        <span className='text-[0.8rem] font-light'> {country.capital}</span>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default Component1;
