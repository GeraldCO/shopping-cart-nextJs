import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { useCartContext } from './useCartContext';

import { Item } from "@/types/items";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const ShoppingCart = (props: any) => {
    const { items, addItem, removeItem, status, showCart } = useCartContext();

    const [state, setState] = React.useState({
      right: true
    });
    
    
    const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }  
        setState({ ...state, right: open });
      };


      const list = (anchor: Anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    // const isCartEmpty = function (cart: number[]){
    //     if (cart.length === 0  ){
    //         return (
    //             <span> Your shopping cart is empty </span>
    //         )
    //     }
    // }

    return (
      <div>
        <React.Fragment key={'right'}>
          <Button onClick={()=>showCart(true)}>'right'</Button>
          <Drawer
          id="MyBoxID"
            anchor={'right'}
            open={status}
            onClick={()=>showCart(false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      
    </div>
    );
}

export default ShoppingCart;