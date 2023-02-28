import style from './detail.module.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { useEffect } from 'react';
import { getdetail } from '../../redux/actions';


export default function Detail(props) {
    console.log(props);

    const dispatch = useDispatch();

    const myCountry = useSelector(state => state.detail);
    // const country = useSelector(state => state.detail);

    const history = useHistory();
    const id = props.match.params.id
    console.log(id);



    useEffect(()=>{
        dispatch(getdetail(id))
    },[dispatch, id])



    console.log(myCountry);

    return (
        <div>
            {
                myCountry?.length > 0 ?
                <p>Loading ...</p>
                :
                <div>
                    <img  src={myCountry.flag} alt="Img. not available" />
                    <h2>{myCountry.name}</h2>
                    <h4>{myCountry.continent}</h4>
                    <h4>{myCountry.id}</h4>
                    <h4>Capital: {myCountry.capital}</h4>
                    <h4 >Región: {myCountry.subregion}</h4>
                    <h4 >Área: {myCountry.area} km²</h4>
                    <h4 >Población: {myCountry.population} Hab.</h4>
                    {/* {console.log(myCountry)}; */}
                </div> 
            }
            <Link to='/home'>
                <button className={style.boton}>Back</button>
            </Link>
        </div>
    )
}
