import React from 'react';

const object = {
    objectOne: [
        {
            name: 'Matt Johnson'
        },
        {
            name: 'Bart Paden'
        },
        {
            name: 'Ryan Doss'
        },
        {
            name: 'Miguel Solano'
        }
    ],
    objectTwo: [
        {
            name: 'Matt Johnson'
        },
        {
            name: 'Bart Paden'
        },
        {
            name: 'Jordan Heigle'
        },
        {
            name: 'Tyler Viles'
        }
    ]
}

const objNames = new Set(object.objectOne.map(({ name }) => name));
const combined = [
  ...object.objectOne,
  ...object.objectTwo.filter(({ name }) => !objNames.has(name))
];

// const objectOneOfObject = object.objectOne.reduce (
//     (acc, o) => {
//         acc[o.value] = o;
//         return  acc;
//     }, {}
// )

// const objectTwoOfObject = object.objectTwo.reduce (
//     (acc, o) => {
//         if(objectOneOfObject[o.value]){
//             acc.duplicates.push(o)
//             return acc;
//         } else {
//             acc.noDuplicates.push(o)
//         }
//         acc.uniqueList[o.value] = o;
//         return acc;
//     }, { uniqueList:{}, noDuplicates:[], duplicates:[] }
// )

// const noRepitition = objectTwoOfObject.noDuplicates

// let ObjOne = object.objectOne.reduce((a,c) => Object.assign(a, [c.name]), {});
// let result = object.objectTwo.filter(v => !ObjOne[v.name] || ObjOne[v.name] !== v.name);


// const result = _.unionBy(object.objectOne, object.objectTwo, 'value');

class ObjectCode extends React.Component{

    render(){
        return (
            <div>
                <h4>Object 1</h4>
                <ul>
                    {
                        object.objectOne.map((person, id) => {
                            return (
                                <li key={id} >
                                    {person.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <h4>Object 2</h4>
                <ul>
                    {
                        object.objectTwo.map((person, id) => {
                            return (
                                <li key={id} >
                                    {person.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <h4>Object 3</h4>
                <ul>
                    {
                        combined.map((person, id) => {
                            return (
                                <li key={id} >
                                    {person.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ObjectCode