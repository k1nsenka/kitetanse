import Header from './Header'

export default function Layout(props){
  return(
    <div>
      <Header />
      {props.children}

      <style global jsx>{`
        （中略）
      `}</style>

    </div>
  );
}