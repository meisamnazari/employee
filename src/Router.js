import React from 'react';
import {Scene,Router, Actions} from 'react-native-router-flux';
import LoginF from './components/LoginF';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent=()=>{
    return(
       <Router>
           <Scene key='root'>

               <Scene key='auth'>
               <Scene
                   style={{paddingTop: 45}}
               key='login'
               component={LoginF}
               title='Please log in'
                   initial
               />
               </Scene>

               <Scene key='main'>
                  <Scene
                   style={{paddingTop: 65}}
                   rightTitle='add'
                   onRight={()=>Actions.employeeCreate()}
                   key='employeeList'
                   component={EmployeeList}
                   title='Employees'
                   />
                   <Scene
                       style={{paddingTop: 65}}
                       key='employeeCreate'
                       component={EmployeeCreate}
                       title='Create Employee'
                   />
                   <Scene
                       style={{paddingTop: 65}}
                       key='employeeEdit'
                       component={EmployeeEdit}
                       title='Edit Employee'
                   />
               </Scene>

           </Scene>
       </Router>
    );
};

export default RouterComponent;