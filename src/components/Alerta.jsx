const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? `from-red-400 to-red-600` : `from-indigo-400 to-indigo-600`} bg-gradient-to-br p-2 text-center rounded-xl text-white mb-5`}>
        {alerta.msg.toUpperCase()}
    </div>
  )
}
export default Alerta;