// ./src/components/CountryDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import countries from '../data.json';
import { Link } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    const country = countries.find((c) => c.name.toLowerCase() === countryName.toLowerCase());

    if (!country) {
        return <h2>Country not found</h2>;
    }

    return (
        <main className='py-[2rem]'>
            <Link to='/'>
                <div className='inline-block px-[1.5rem] py-[0.75rem] mb-[2rem] text-[0.8rem] shadow-md'>
                    <i className='fa fa-arrow-left'></i> Back
                </div>
            </Link>
            <div className='grid grid-cols-2 gap-[5rem]'>
                <img src={country.flag} className='w-full h-[20rem] object-cover' />
                <div className='flex flex-col justify-center'>
                    <h1 className='text-[1.5rem] font-bold mb-[1rem]'>{country.name}</h1>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                Native Name:
                                <span className='text-[0.8rem] font-light'> {country.nativeName}</span>
                            </p>
                            <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                Population:
                                <span className='text-[0.8rem] font-light'> {country.population.toLocaleString()}</span>
                            </p>
                            <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                Region:
                                <span className='text-[0.8rem] font-light'> {country.region}</span>
                            </p>
                            <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                Sub Region:
                                <span className='text-[0.8rem] font-light'> {country.subregion}</span>
                            </p>
                            <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                Capital:
                                <span className='text-[0.8rem] font-light'> {country.capital}</span>
                            </p>
                        </div>
                        <div>
                            <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                Top Level Domain:
                                <span className='text-[0.8rem] font-light'> {country.topLevelDomain}</span>
                            </p>
                            <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                Currencies:
                                <span className='text-[0.8rem] font-light'> {country.currencies[0].code}</span>
                            </p>
                            <p className='text-[0.8rem] font-medium mb-[0.5rem]'>
                                Languages:
                                <span className='text-[0.8rem] font-light'>
                                    {country.languages.map((lan, index) => (
                                        <span key={index}>
                                            {lan.name}
                                            {index < country.languages.length - 1 && ', '}
                                        </span>
                                    ))}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='mt-[2rem] flex flex-wrap gap-[0.5rem]'>
                        <p className='text-[0.8rem] font-medium'>Border Countries:</p>
                        {country.borders.map((borderCountry, index) => {
                            // 找到对应的国家数据
                            const borderCountryData = countries.find(
                                (country) => country.alpha3Code.toLowerCase() === borderCountry.toLowerCase()
                            );

                            return (
                                <div key={index} className='borderCountry px-[1rem] py-[0.1rem] shadow text-[0.75rem] font-light'>
                                    {borderCountryData ? (
                                        <Link to={`/country/${borderCountryData.name.toLowerCase()}`}>
                                            {borderCountryData.name}
                                        </Link>
                                    ) : (
                                        'Unknown Country'
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CountryDetail;

