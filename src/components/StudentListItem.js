import React,{Component} from 'react'

const StudentListItem = props=>{

        const id=this.props.studentItem.id;
        return (
            <tr key={id} onClick={() =>props.onClickStudent(id)}>
                <td>{id}</td>
                <td>
                    {props.studentItem.name}
                </td>
                <td>
                    <button onClick={()=>this.props.onDeleteStudent(id)}>X</button>
                </td>
                
            </tr>
        );
        }
export default StudentListItem;
