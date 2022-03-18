import React from 'react';
import * as FaIcons from "react-icons/fa";
//import * as GiIcons from "react-icons/Gi";
//import * as MdIcons from "react-icons/Md";

export const MenuItems= [
    {
        title:"MyProfile",
        path:"/",
        icon:<FaIcons.FaUserAlt/>,
    },
    {
        title:"Student Profile",
        path:"/student-profile",
        icon:<FaIcons.FaDiscourse/>,
    },
    {
        title:"My-Subscription",
        path:"/my-subscription",
        icon:<FaIcons.FaMoneyCheck/>,
    },
    {
        title:"Growth",
        path:"/growth",
        icon:<FaIcons.FaTree/>,
    },
    {
        title:"Assignmet",
        path:"/assignment",
        icon:<FaIcons.FaNetworkWired/>,

        subMenu:[
            {
                title:"Maths",
                path:"/maths",
            },
            {
                title:"Science",
                path:"/science",
            },
        ]
    },
    {
        title:"SignOut",
        path:"/signout",
        icon:<FaIcons.FaSignOutAlt/>,
    }
    
]