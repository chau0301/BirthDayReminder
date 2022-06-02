import React from "react";
const List = ({people}) => {
    return (
        <>
            {people.map((person) => {
                const {id,name,age,image} = person
                const date = getNextBirthDay(age)
                console.log(date)
                return <article key={id} className="person">
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{date} more days until next birthday </p>
                    </div>
                </article>
            })}
        </>
    );
};

function getNextBirthDay(birthDay) {
    var today = new Date(); 
    var bd = new Date(birthDay);
    
    var year = today.getFullYear()
    var month = bd.getMonth() + 1
    var date = bd.getDate()
    var dateString = String(month) + '/' + String(date) + '/' + String(year)
    var BD = new Date(dateString)
    if (today > BD) {
        dateString = String(month) + '/' + String(date) + '/' + String(year+1)
        BD = new Date(dateString)
        return Math.round(Math.abs(BD-today)/(1000 * 3600 * 24));
    }
    else {
        return Math.round(Math.abs(BD-today)/(1000 * 3600 * 24));
    }
}

export default List;