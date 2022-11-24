import React, { Fragment } from "react";
import Data from "../../data.json";
import Cobro from "../../assets/img/check.png";
import Metodo from "../../assets/img/mediosdepago.png";
import "./Table.css";

const Table = () => {
  return (
    <Fragment>
      <div className="table-title">
        <h3>Tus ventas de Septiembre</h3>
      </div>
      <table class="table">
        <tr className="table-files">
          <th>Transacción</th>
          <th>Fecha y Hora</th>
          <th>Método de pago</th>
          <th>ID transaccional Bold</th>
          <th>Monto</th>
        </tr>

        <tr className="table-columns">
          <td className="table-transaccion">
            <img src={Cobro} className="icon-cobro" />
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Transaccion1}</p>;
            })}
          </td>
          <td>
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Fecha}</p>;
            })}
          </td>
          <td className="table-metodo">
            <img src={Metodo} className="icono-metodo" />
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Metodo}</p>;
            })}
          </td>
          <td>
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.IdTransaccionBold}</p>;
            })}
          </td>
          <td>
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Monto1}</p>;
            })}
          </td>
        </tr>

        <tr className="table-columns">
          <td className="table-transaccion">
            <img src={Cobro} className="icon-cobro" />
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Transaccion2}</p>;
            })}
          </td>
          <td>
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Fecha}</p>;
            })}
          </td>
          <td className="table-metodo">
            <img src={Metodo} className="icono-metodo" />
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Metodo}</p>;
            })}
          </td>
          <td>
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.IdTransaccionBold}</p>;
            })}
          </td>
          <td>
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Monto2}</p>;
            })}
          </td>
        </tr>

        <tr className="table-columns3">
          <td className="table-transaccion">
            <img src={Cobro} className="icon-cobro" />
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Transaccion1}</p>;
            })}
          </td>
          <td>
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Fecha}</p>;
            })}
          </td>
          <td className="table-metodo">
            <img src={Metodo} className="icono-metodo" />
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Metodo}</p>;
            })}
          </td>
          <td>
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.IdTransaccionBold}</p>;
            })}
          </td>
          <td>
            {Data.map((dataDetail, index) => {
              return <p>{dataDetail.Monto1}</p>;
            })}
          </td>
        </tr>
      </table>
    </Fragment>
  );
};

export default Table;
