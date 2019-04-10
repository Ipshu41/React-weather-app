import React from "react"

class Title extends React.Component {
    render(){
        return (
            <div>
            <h1 className="title-container__title"> Weather Teller</h1>
            <h3 className="title-container__subtitle"> How is it outside in your city today?</h3>
            </div>
        );
        }
    };
export default Title;
