import React,{Component}from 'react'
import StudentList from './components/Studentlist'
import FormDemo from './components/FormDemo'
import ApiDemo from './components/ApiDemo'

// const App=() =>{
//   return(
//     <div>
//       <h1>Wlcome</h1>
//     </div>
//   );
// }
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      students:[
        {id:101,name:'First',cgpa:3.8},
        {id:102,name:'Second',cgpa:2.5},
        {id:103,name:'Third',cgpa:4.5},
        {id:104,name:'Fourth',cgpa:3.3},
        {id:105,name:'Fifth',cgpa:3.7},
      ]
    };
  }
  deleteStudent = id=> {
      this.setState({
          students:this.state.students.filter(s=>s.id !== id)
      });
  }
  selectStudent = id=>{
      this.setState({
          students:this.state.students.filter(s=>s.id===id)
      });
    
  }

  render(){
    return(
      <div className="container">
        <h3>Student List</h3>
        <StudentList studentlist={this.state.students}
        deleteStudent={this.deleteStudent}
        selectStudent={this.selectStudent}/>
        <ApiDemo/>
       
      </div>
    );
  }
}

export default App;