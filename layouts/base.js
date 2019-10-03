import Link from "next/link";
import css from "../styles/style.scss";


const Base = (props) => {
   return (<div className={css.main}>
       <div className={css.logo}>
           <h2><Link href="/"><a>RIMAC</a></Link></h2>
       </div>

       {props.children}

       {}
   </div>)
};

export default Base;
