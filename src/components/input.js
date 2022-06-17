import React from "react";
import { Input, Label, LeyendaError, Desplegable, LabelDes,DesplegableCaja, InputDes, Doblegrid } from "./ElementForm";

const ComponentInput = ({ estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular }) => {
    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value });
    }
    const validacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: 'true' });
            } else {
                cambiarEstado({ ...estado, valido: 'false' });
            }
        }
    }
    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <Input
                type={tipo}
                placeholder={placeholder}
                id={name}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
            />
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    );
}

const Desplegable1 = ({label}) => {
    return (
        <div>
            <LabelDes>{label}</LabelDes>
            <Desplegable className="custom-select">
                <option value="">Persona Natural</option>
                <option value="">Empresa</option>
                <option value="">Otras</option>                
            </Desplegable>
        </div>
    );
}
const Desplegable2 = ({label}) => {
    return (
        <div>
            <Label>{label}</Label>
            <DesplegableCaja className="custom-select">
                <option value="">Teléfono</option>
                <option value="">Celular</option>                               
            </DesplegableCaja>
        </div>
    );
}

const Descrip = ({ estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular }) => {
    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value });
    }
    const validacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: 'true' });
            } else {
                cambiarEstado({ ...estado, valido: 'false' });
            }
        }
    }
    return (
        <Doblegrid>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <InputDes
                type={tipo}
                placeholder={placeholder}
                id={name}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
            />
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </Doblegrid>
    );
}
export { ComponentInput, Desplegable1, Desplegable2, Descrip};