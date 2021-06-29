import React, {useState, useEffect, isValidElement} from "react";
import firebaseDb  from '../config/firebase'
import axios from "axios";

const INITIAL =[
{
    trade_id:"",
    price:"1753.97000000",
    base_volume:"0.00685000",
    target_volume:"12.01469450",
    type:"buy",
    timestamp:"1624723921000"
}]


const  Observer = () => {


    const [firebaseObject, setFirebaseObject] = useState({})
    const  [saleObject, setSaleObject] = useState({})
    const  [currentId, setCurrentId] = useState()
    useEffect(() => {
       fetchItems()

        console.log(saleObject)
    }, []);

    const fetchItems = async  () => {



        axios.get('https://goldexco.in/Api/External/historical_trades?ticker_id=CYCE_USDT&depth=10000').then(response =>{
            const resut=response.data.data.buy;
            setSaleObject({
                ...resut
            })

        })



    }

    const onDelete = key => {

        if(window.confirm('Are you sure')){
            firebaseDb.child('contacts/'+key).remove(

                err => {
                    if(err){
                        console.log(err)
                    }
                    else
                    {
                        setCurrentId('')
                    }
                }
            )
        }
    }
    const addRecord = () => {

        const newObject=[];
        firebaseDb.child('Sales').on('value', snapshot => {
            if(snapshot.val() != null)
                setFirebaseObject({
                    ...snapshot.val()
                })
        })

        Object.keys(saleObject).map(id => {
            firebaseDb.child('goldex').push(
                saleObject[id],
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )
        })

    }
    const addOrEdit =  obj => {
        if(currentId=='')
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )
        else
        {
            firebaseDb.child('contacts/'+currentId).set(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                    else
                    {
                        setCurrentId('')
                    }
                }
            )
        }

    }

    return (

        <div className="row mt-4">

            <div className="col-md-7">

                <a onClick={addRecord} className="btn btn-primary"> Kaydet</a>
                <table className="table table-border">
                    <thead>
                    <tr>
                        <th>Trade ID</th>
                        <th>Fiyat</th>
                        <th>Temel Fiyat</th>
                        <th>Hedef Fiyat</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(saleObject).map(id => {
                            return <tr key={id}>
                                <td>{saleObject[id].trade_id}</td>
                                <td>{saleObject[id].price}</td>
                                <td>{saleObject[id].base_volume}</td>
                                <td>{saleObject[id].target_volume}</td>

                            </tr>

                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default Observer;