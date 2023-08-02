const { Router} =require('express');

const router= Router();
router.get('/',(req,res)=>{
    res.send([{
    item:1,
    quantity:2
    
    }]);
    })
    const grocerylist=[
        {
    
    item:'chew',
    quantity:2,
    miles:3
    
    },
    {
        item:'samsung',
        quantity:3,
        miles:4
        
     }
        ,
     {
     item:'dell',
     quantity:4,
     miles:2
      }
            
    
    ]
    
    
    router.post('/tes',(req,res)=>{
        // req.send(grocerylist),
        const { item, quantity, miles } = req.body;
        if (!item || !quantity || !miles) {
            return res.status(400).send({ error: 'Invalid request body' });
        }
        grocerylist.push(req.body);
        res.send(grocerylist);
        
    });
    
    
    router.get('/tes',(req,res)=>{
         // console.log(req.query);
//         const {miles}=req.query;
//         const parsedmiles=parseInt(miles)
//         if(!isNaN(parsedmiles))
//         {
// const filterd=grocerylist.filter((g)=>g.miles<parsedmiles);
// res.send(filterd);

//         }
//         else
res.cookie('Visited',true,{
    maxAge:10000,
});
       
        res.send(grocerylist)
    });
    router.get('/tes/:item',(req,res)=>{
        const {item}=req.params;
        const gitem=grocerylist.find((g)=>g.item===item);
        // console.log(gitem);
        res.send(gitem);
    
    });

    router.get('/cart',(req,res)=>
    {
const{cart}=req.session;
if(!cart)
{
    res.send('You have no item in your cart');

}
else

{
    res.send(cart);
    
}

    })

    router.post('/cart/item',(req,res)=>
    {
        const {item,quantity}=req.body;
        const cartitem={item,quantity};
        // res.send(req.session);
        const{cart}=req.session;
        if(cart)
        {
            // const {items}=cart;
            req.session.cart.items.push(cartitem);



        }
        else
        {
            req.session.cart={
                items:[cartitem],

            }
        }
        res.send(201);

        console.log(cartitem);

    });
    
    module.exports=router;