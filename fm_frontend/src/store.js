let data1={
        namjernice:[
                {
                        id_namjernice: 100001,
                        naziv_namjernice:"tomato",
                        cijena_namjernice: 1.30,
                        url_namjernice:"https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
                        kategorija:"povrće",
        
                },
                {
                        id_namjernice: 100002,
                        naziv_namjernice:"banana",
                        cijena_namjernice: 1.30,
                        url_namjernice:"https://images.unsplash.com/photo-1606050627722-3646950540ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                        kategorija:"voće",
        
                },
                {
                        id_namjernice: 100003,
                        naziv_namjernice:"milk",
                        cijena_namjernice: 1.30,
                        url_namjernice:"https://images.unsplash.com/photo-1563636619-e9143da7973b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
                        kategorija:"mlječni_projzvodi",
        
                },
        ],
        fridge:{
                
                fridge_namjernice:[
                        {
                                id_namjernice_fridge:100001,
                                naziv_namjernice:"tomato",
                                cijena_namjernice: 1.30,
                                url_namjernice:"https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
                                kategorija:"povrće",
                                fridge_stavka:{
                                        kolicina: 5,
                                        rok: "2021/06/25",
                                },
                        },
                        {
                                id_namjernice_fridge:100002,
                                naziv_namjernice:"banana",
                                cijena_namjernice: 1.30,
                                url_namjernice:"https://images.unsplash.com/photo-1606050627722-3646950540ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                                kategorija:"voće",
                                fridge_stavka:{
                                        kolicina: 5,
                                        rok: "2021/06/21",
                                },
                        },
                        {
                                id_namjernice_fridge:100003,
                                naziv_namjernice:"milk",
                                cijena_namjernice: 1.30,
                                url_namjernice:"https://images.unsplash.com/photo-1563636619-e9143da7973b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
                                kategorija:"mlječni_proizvodi",
                                fridge_stavka:{
                                        kolicina: 5,
                                        rok: "2021/06/30",
                                },
                        },
                ],
        },
        shopping_liste:[
                {
                       id_lista:1000,
                       naziv_liste: "Konzum",
                       suma_liste: 0,
                       datum_izrade_liste: "2021/06/30",
                       lista_namjernice:[
                        {
                                id_namjernice_lista:100001,
                                naziv_namjernice:"tomato",
                                cijena_namjernice: 1.30,
                                url_namjernice:"https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
                                kategorija:"povrće",
                                lista_stavka:{
                                        kolicina: 5,
                                        total_namjernica_lista: 0,
                                        
                                },
                        },
                        {
                                id_namjernice_lista:100002,
                                naziv_namjernice:"banana",
                                cijena_namjernice: 1.30,
                                url_namjernice:"https://images.unsplash.com/photo-1606050627722-3646950540ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                                kategorija:"voće",
                                lista_stavka:{
                                        kolicina: 5,
                                        total_namjernica_lista: 0,
                                        
                                },
                        },
                        {
                                id_namjernice_lista:100003,
                                naziv_namjernice:"milk",
                                cijena_namjernice: 1.30,
                                url_namjernice:"https://images.unsplash.com/photo-1563636619-e9143da7973b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
                                kategorija:"mlječni_proizvodi",
                                lista_stavka:{
                                        kolicina: 5,
                                        total_namjernica_lista: 0,
                                        
                                },
                        },
                        ],
                },
                {
                        id_lista:1001,
                        naziv_liste: "Kaufland",
                        suma_liste: 0,
                        datum_izrade_liste: "2021/06/30",
                        lista_namjernice:[
                         {
                                 id_namjernice_lista:100001,
                                 naziv_namjernice:"tomato",
                                 cijena_namjernice: 1.30,
                                 url_namjernice:"https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
                                 kategorija:"povrće",
                                 lista_stavka:{
                                         kolicina: 5,
                                         total_namjernica_lista: 0,
                                         
                                 },
                         },
                         {
                                 id_namjernice_lista:100002,
                                 naziv_namjernice:"banana",
                                 cijena_namjernice: 1.30,
                                 url_namjernice:"https://images.unsplash.com/photo-1606050627722-3646950540ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                                 kategorija:"voće",
                                 lista_stavka:{
                                         kolicina: 5,
                                         total_namjernica_lista: 0,
                                         
                                 },
                         },
                         {
                                 id_namjernice_lista:100003,
                                 naziv_namjernice:"milk",
                                 cijena_namjernice: 1.30,
                                 url_namjernice:"https://images.unsplash.com/photo-1563636619-e9143da7973b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
                                 kategorija:"mlječni_proizvodi",
                                 lista_stavka:{
                                         kolicina: 5,
                                         total_namjernica_lista: 0,
                                         
                                 },
                         },
                         ],
                 },
        ],

}

export default {
        data1,
        searchTerm: '',
};