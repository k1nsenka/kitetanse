import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout(props){
  return(
    <div>
      <Header />
      {props.children}
      <Footer/>

      <style global jsx>{`
        （中略）
      `}</style>

    </div>
  );
}