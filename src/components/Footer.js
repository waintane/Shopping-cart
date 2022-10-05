import classes from "./Footer.module.css";

function Footer(){
    return(
        <div className={classes.footer}>
            <div>
                <ul>
                    <li>Ⓒ Tout droit réservé à Olivier Paradis-Tardif / photos importées du site cuts</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;