import React, {useState} from "react"; //1. importar el hook useState

//use state = usar estado;

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	//    valor inicial, actualiza el valor inicial
//    const [nombre,setNombre]= useState("Manzana")
//    const [seguidores,setSeguidores]= useState(0)
   const [color1,setColor1]= useState("");

//    function cambiarNombre() {
// 	setNombre("Pera")
//    }

//    function follow() {
// 	//             0  + 1 = 1
// 	setSeguidores(seguidores+1)

//    }

//    useState()//===> [variable,function]

	//funcionalidades del componente
    //  let nombre = "Rosinni";
	//  variables, constates, funciones
	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("")
		}else{
		setColor1("btn-danger")
	}
}



	return (
		<div className="text-center d-flex flex-column">
			<button className={"btn "+color1} onClick={encenderRojo}>Rojo</button>
			<button>Amarillo</button>
			<button>Verde</button>
		</div>
	);

};

export default Home;

