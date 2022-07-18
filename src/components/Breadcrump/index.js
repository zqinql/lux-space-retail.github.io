import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Breadcrump({list}) {
  return (
    <section class="bg-gray-100 py-8 px-4">
      <div class="container mx-auto">
        <ul class="breadcrumb">
            {
                list?.map?.((item, index) => {
                    const arias = index === list.length ? {'aria-label': 'current-page'} : {}
                    return(
                        <li key='item.url' {...arias}>
                        <Link to='item.url'>{item.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </section>
  )
}
Breadcrump.ProptypesProptypes = {
    list: PropTypes.array.isRequired,
}