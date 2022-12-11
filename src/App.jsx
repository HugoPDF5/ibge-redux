import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { callAPI } from '../services/reqs'
import { changeCounty, changeInfo } from "./store/states/states.actions"


function App() {
  const dispatch = useDispatch()
  const states = useSelector(state => state.states.states)
  const counties = useSelector(state => state.states.counties)

  const [table, setTable] = useState([{}])

  useEffect(() => {
    const getAll = async () => {
      const data = await callAPI.getAllStates()
      dispatch(changeCounty(data))
    }
    getAll()
  }, [])

  async function handleChangeState(event) {
    const result = await callAPI.getCountiesByUf(event.target.value)
    dispatch(changeInfo(result))
  }

  async function handleChangeCounty(event) {
    const result = await callAPI.getDistricts(event.target.value)
    setTable(result)
  }

  return (
    <>
      <select className="form-select-md" aria-label="Default select example" name="state" id="state" onChange={handleChangeState}>
        <option>Selecione um estado</option>
        {states.map(state => {
          return <option key={state.id} value={state.sigla}> {state.nome}</option>
        })}
      </select>

      <select className="form-select-md" aria-label="Default select example" name="county" id="county" onChange={handleChangeCounty}>
        {counties.map(county => {
          return <option key={county.id} value={county.id}> {county.nome}</option>
        })}
      </select>

      <table className="table">
        <thead>
          <tr>
            <th> Nome </th>
            <th> Microrregião </th>
            <th> Mesorregião </th>
            <th> Região </th>
            <th> UF </th>
          </tr>
        </thead>

        <tbody className="table-group-divider">
          {table.map(item => {
            return <tr>
              <td> {item.name}</td>
              <td> {item.microregion}</td>
              <td> {item.mesoregion}</td>
              <td> {item.region}</td>
              <td> {item.uf}</td>
            </tr>
          })}
        </tbody>
      </table>




    </>
  )
}

export default App
