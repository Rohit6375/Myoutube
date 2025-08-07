import React from 'react'
import Comment from './Comment';
import CommentsList from './CommentsList';

const commentsData=[
    {
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[{
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[]
    },{
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[
            {
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[ {
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[]
    },]
    },
        ]
    },]
    },
    {
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[{
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[]
    },
]
    },
    {
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[{
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[]
    },]
    },
    {
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[]
    },
    {
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[]
    },
    {
        name:"Rohit Morya",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint ex ipsa amet porro nam.",
        replies:[]
    },
];

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer