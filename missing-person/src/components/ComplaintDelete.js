import React,{ useEffect, useState } from 'react';
import MaterialTable from 'material-table';
// import {useNavigate} from 'react-router-dom';
import axios from 'axios'
// import {Link} from '@material-ui/core'

function ComplaintDelete() {
    const [data,setComp]=useState([])
    const columns=[
      {title:"case id",field:"cid"},
      {title:'missing name',field:'mname'},
      {title:'missing state',field:'mstate'},
      {title:'missing address',field:'maddress'},
      {title:'missing date',field:'mdate'},
      {title:'missing location',field:'mlslocation'},
      {title:'investigator name',field:'iname'},
      {title:'investigator address',field:'iaddress'},
    //   {title:'missing photo',field:'m_url'},
      {title:'missing description',field:'mdescription'},
      {title:'missing phone no.',field:'mphone_no'},
      ]
      
      const fetchcomplaints = async(e) =>{
        e.preventDefault();
        try{
          const response = await axios.get('/fetchcomplaint');
          setComp(response.data);
            }
        catch(error){
            console.log("inside catch not fetched");
            console.log(error);
        }
    }
        
    // const data=[
    //     {cid:'C101',mname:'Ram',mstate:'Kerala',maddress:'Goparnika nagar',mdate:'01-05-2022',mlslocation:'Kerala',iname:'Shankar',iaddress:'Kerala',m_url:'',mdescription:'Kidnap',mphone_no:'98959897'},
    //     {cid:'C102',mname:'Shyam',mstate:'Karnataka',maddress:'Jew street',mdate:'05-05-2022',mlslocation:'Karnataka',iname:'Bhaskar',iaddress:'Karnataka',m_url:'',mdescription:'Wander',mphone_no:'97909876'},
    //     {cid:'C103',mname:'Seeta',mstate:'Delhi',maddress:'Prashanthi nagar',mdate:'06-06-2023',mlslocation:'Delhi',iname:'Govind',iaddress:'Delhi',m_url:'',mdescription:'Aged',mphone_no:'98028756'},
    //     {cid:'C104',mname:'Geeta',mstate:'Bihar',maddress:'Gandhi nagar',mdate:'29-08-2023',mlslocation:'Bihar',iname:'Althaf',iaddress:'Bihar',m_url:'',mdescription:'Alzheimers',mphone_no:'90764312'}
    // ]
    // const columns=[
    //     {
    //         title:'case id',field:'cid'
    //     },
    //     {
    //         title:'missing name',field:'mname'
    //     },
    //     {
    //         title:'missing state',field:'mstate'
    //     },
    //     {
    //         title:'missing address',field:'maddress'
    //     },
    //     {
    //         title:'missing date',field:'mdate'
    //     },
    //     {
    //         title:'missing location',field:'mlslocation'
    //     },
    //     {
    //         title:'investigator name',field:'iname'
    //     },
    //     {
    //         title:'investigator address',field:'iaddress'
    //     },
    //     {
    //         title:'missing photo',field:'m_url'
    //     },
    //     {
    //         title:'missing description',field:'mdescription'
    //     },
    //     {
    //         title:'missing phone no.',field:'mphone_no'
    //     }
    // ]
  return (
    <div>
         <button className=" mt-2 bg-indigo-800 hover:bg-indigo-500 text-white font-semibold hover:text-white py-2 px-10  border border-blue-500 hover:border-transparent rounded" onClick = { fetchcomplaints }>
        View List
      </button>
        <h1 align='center'> Delete Complaint</h1>
        <MaterialTable title="Complaints" 
        data={data}
        columns={columns} 
        editable={{onRowDelete:selectedRow=>new Promise((resolve,reject)=>{
            const index=selectedRow.tableData.cid;
            const updatedRows=[...data]
            updatedRows.splice(index,1)
            setTimeout(()=>{
            data={updatedRows}
            resolve()
            },2000)
            })
        }}
        options={{paging:false , delete:true }}/>
    </div>
  )
}

export default ComplaintDelete;