const DataList = ({ datosTecnicos, asesores }) => {
  // Extraer el enlace web del objeto que lo contiene
  const webItem = datosTecnicos.find((dato) => dato.web && dato.href);

  return (
    <div className="mx-auto h-fit w-full lg:rounded-xl">
      <dl className="-my-3 divide-y divide-primary-300 text-xs text-primary-950/70 dark:text-primary-200/70">
        <ul className="space-y-2 py-6">
          <h3 className="text-base leading-tight">Datos técnicos:</h3>
          {datosTecnicos
            .filter((dato) => dato.label && dato.value) // Solo procesar elementos válidos
            .map((dato, index) => (
              <li key={index}>
                <strong>{dato.label}</strong>: <span>{dato.value}</span>
              </li>
            ))}

          <h3 className="text-base leading-tight">Asesores:</h3>
          <ul className="space-y-2">
            {asesores?.map((asesor, index) => (
              <li key={index}>{asesor}</li>
            ))}
          </ul>
        </ul>

        {webItem && (
          <div className="flex items-end space-x-1 py-6">
            <h3 className="text-base leading-tight">Web:</h3>
            <ul>
              <li>
                <a
                  href={webItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:underline"
                >
                  {webItem.web}
                </a>
              </li>
            </ul>
          </div>
        )}
      </dl>
    </div>
  );
};

export default DataList;
