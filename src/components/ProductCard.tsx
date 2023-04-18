import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import classes from './ProductCard.module.css'
import { Item } from '@/types/items';
import Image from 'next/image';
import { Button, Card, CardMedia, Typography } from '@mui/material';


const ProductCard = ({product}: {product: Item}) => {
    const {name, gallery, price} = product;
    

    return(
        <Card className={classes.productCardContainer}>
            <CardMedia
                className={classes.productPictureContainer}
                title={name}
            >
                <img className={classes.productPicture} src={gallery[0].src} alt={name} />
            </CardMedia>
            <div>
                <Button className={classes.btn} variant="contained" color="primary">
                Black Friday
                </Button>
                <Button className={classes.btn} variant="outlined" color="success">
                Free Shipping
                </Button>
            </div>
            <Typography className={classes.productName} variant="h6" component="h2">
                {name}
            </Typography>
            <Typography className={classes.divPrice} variant="h5" component="div">
                US$ {price}.00
            </Typography>
            <div className={classes.rating}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <span>(1866)</span>
            </div>
            <Typography className={classes.deliveryBlock} variant="body2">
                Receive it by tomorrow
            </Typography>
            <Typography className={classes.seller} variant="body2" component="p">
                sold by <span>pc components</span>
            </Typography>
        </Card>
    );
}

export default ProductCard;