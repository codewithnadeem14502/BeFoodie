import React from "react"
class Profile extends React.Component{ 
    constructor(props)
    {
        super(props);

        this.state ={
            count: 0,
            count2 : 0,
        };
    }
    // componentDidMount()
    // {
    //     console.log("component did mount")
    // }
    // componentDidUpdate()
    // {
    //     console.log("component  ")
    // }
    // componentWillUnmount()
    // {
    //     console.log("component UN MOUNTED ")
    // }
    render()
    {
        // console.log('render')
        const {count} = this.state;
        return (
            <div>
                <h1>class based componet</h1>
                <h3> name : {this.props.name}</h3> 
                <h3> count: {count}</h3> 
                <button onClick={()=>{
                    this.setState({
                        count:1,
                    });
                }}> Setcount</button>
            </div>
        )
    }
}
export default Profile;