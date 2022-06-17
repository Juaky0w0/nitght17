
export function EmpresaProps(props){
    return(
        <>
        {/*History*/}
<div className='container-empresas'>
  <div className='container-context'>
<div className='history'>
<p>{props.title}</p>
<h2>{props.name}</h2>
</div>
<div className='context'>
<p>{props.context}
</p>
</div>
</div>
<div className='imgOne'>
<img
          className="d-block w-100"
          src={require(`../img/img-empresa-${props.img}.png`)}
          alt="Imcetron"
        />
</div>
</div>
</>
    );
}


export function ServicesProps(props){
  return(
 <>
<div className='container-services'>
<div className='container-context-empresas'>
<div className='history-services'>
<p>{props.title}</p>
<h2>{props.name}</h2>
</div>
<div className='context-services'>
<p>{props.context}
</p>
</div>
</div>
    </div>
    </>
  );
};



