import React,{Component} from 'react'
import StudentListItem from '../components/StudentListItem'

export default class StudentList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let studentItems=
        this.props.studentlist.map(s=><StudentListItem studentItem={s}
        onDeleteStudent={this.props.deleteStudent} onClickStudent={this.props.selectStudent}/>
            );
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {studentItems}
            </tbody>
        </table>
    )

    }
}