let RAW = [
  // -------- PARCIAL 1 (Conceptos base) --------
  { id: 'P1-01', parcial: 'p1', text: '¿Cuál fue el objetivo central de la sesión de Giovanna Saugal?', options: [
    ['A','Explicar cómo construir el artefacto tecnológico desde cero'],
    ['B','Explicar una matriz/estrategia para operacionalizar variables a medir en las fases de validación'],
    ['C','Enseñar a programar pruebas unitarias con frameworks específicos'],
    ['D','Definir únicamente qué es una hipótesis'],
  ], correct: ['B'] },

  { id: 'P1-02', parcial: 'p1', text: 'Las fases de validación trabajadas en el curso (según el ciclo de transferencia de tecnología) son:', subtitle: '(Seleccione todas las correctas)', options: [
    ['A','Validación en la academia'],
    ['B','Validación estática'],
    ['C','Validación dinámica'],
    ['D','Validación financiera'],
  ], correct: ['A','B','C'] },

  { id: 'P1-03', parcial: 'p1', text: 'La validación en la academia se caracteriza por:', options: [
    ['A','Un piloto con usuarios reales en contexto real'],
    ['B','Ser conducida por los estudiantes/desarrolladores en entorno académico para capturar fallas obvias'],
    ['C','Ser una revisión contractual por el cliente'],
    ['D','Medir solo variables de transformación en el contexto'],
  ], correct: ['B'] },

  { id: 'P1-04', parcial: 'p1', text: 'La validación estática se realiza principalmente con:', options: [
    ['A','Usuarios reales en un piloto completo'],
    ['B','Representantes del beneficiario/cliente o usuarios representativos, durante iteraciones/cambios'],
    ['C','Solo con herramientas automáticas de análisis de código'],
    ['D','Solo con jurados académicos en sustentación'],
  ], correct: ['B'] },

  { id: 'P1-05', parcial: 'p1', text: 'La validación dinámica consiste en:', options: [
    ['A','Pruebas unitarias y de integración únicamente'],
    ['B','Evaluación de un piloto con usuarios reales midiendo variables ligadas al objetivo/pregunta/hipótesis'],
    ['C','Revisión de requisitos sin interacción de usuarios'],
    ['D','Auditoría legal del proyecto'],
  ], correct: ['B'] },

  { id: 'P1-06', parcial: 'p1', text: 'Según la sesión, en validación dinámica se pueden usar elementos de investigación porque:', options: [
    ['A','La investigación elimina por completo variables extrañas'],
    ['B','Permite diseñar la recolección/análisis de datos para corroborar el objetivo o responder la pregunta inicial'],
    ['C','Obliga a usar siempre etnografía'],
    ['D','Solo aplica a proyectos de ciencias sociales'],
  ], correct: ['B'] },

  { id: 'P1-07', parcial: 'p1', text: 'En la fase de validación dinámica, la docente recalcó que normalmente el tiempo no alcanza para:', options: [
    ['A','Usar más de una estrategia de investigación en paralelo'],
    ['B','Hacer ninguna medición cuantitativa'],
    ['C','Tener variables de interés'],
    ['D','Documentar evidencias'],
  ], correct: ['A'] },

  { id: 'P1-08', parcial: 'p1', text: 'Una variable es:', options: [
    ['A','Un algoritmo para cifrar información'],
    ['B','Una característica/propiedad de un objeto/persona/grupo que puede adquirir diferentes valores'],
    ['C','Un requisito no funcional obligatorio'],
    ['D','Una tabla de una base de datos'],
  ], correct: ['B'] },

  { id: 'P1-09', parcial: 'p1', text: 'En un modelo causal, las variables independientes y dependientes se entienden como:', options: [
    ['A','Independiente = efecto; Dependiente = causa'],
    ['B','Independiente = causa; Dependiente = efecto'],
    ['C','Independiente = algo no medible; Dependiente = medible'],
    ['D','Ambas son lo mismo'],
  ], correct: ['B'] },

  { id: 'P1-10', parcial: 'p1', text: 'Las variables extrañas (confusoras) son aquellas que:', options: [
    ['A','No se pueden medir por definición'],
    ['B','No dependen del contexto y siempre son constantes'],
    ['C','No puedo controlar totalmente y podrían afectar el resultado de la variable dependiente'],
    ['D','Solo aparecen en validación en la academia'],
  ], correct: ['C'] },

  { id: 'P1-11', parcial: 'p1', text: '¿Qué se debe hacer con las variables extrañas según la sesión?', options: [
    ['A','Ignorarlas para no complicar el análisis'],
    ['B','Controlarlas lo más posible para que el efecto observado se deba al artefacto'],
    ['C','Convertirlas en variables dependientes automáticamente'],
    ['D','Medirlas solo si son cualitativas'],
  ], correct: ['B'] },

  { id: 'P1-12', parcial: 'p1', text: 'Ejemplo de variable extraña mencionado implícitamente por la docente en un caso educativo:', options: [
    ['A','Que los profesores sean diferentes entre grupos de uso/no uso del software'],
    ['B','Que el software use Python en lugar de Java'],
    ['C','Que el proyecto tenga un logo distinto'],
    ['D','Que el estudiante escriba más rápido en teclado mecánico'],
  ], correct: ['A'] },

  { id: 'P1-13', parcial: 'p1', text: 'Variables cualitativas vs cuantitativas:', options: [
    ['A','Cualitativas = números; Cuantitativas = descripciones'],
    ['B','Cualitativas = características; Cuantitativas = indicadores numéricos'],
    ['C','Ambas son siempre numéricas'],
    ['D','Ambas son siempre opiniones'],
  ], correct: ['B'] },

  { id: 'P1-14', parcial: 'p1', text: '“Operacionalizar” una variable significa:', options: [
    ['A','Hacerla más abstracta para que sea general'],
    ['B','Aterrizarla en indicadores observables/medibles con instrumentos y forma de medición'],
    ['C','Convertirla en una hipótesis automáticamente'],
    ['D','Eliminar dimensiones y subdimensiones para simplificar'],
  ], correct: ['B'] },

  { id: 'P1-15', parcial: 'p1', text: 'La matriz de recolección de información sirve principalmente para:', options: [
    ['A','Diseñar la UI del sistema'],
    ['B','Soportar y documentar cómo se validó el proyecto en las 3 fases'],
    ['C','Reemplazar el marco teórico del proyecto'],
    ['D','Definir el presupuesto del proyecto'],
  ], correct: ['B'] },

  { id: 'P1-16', parcial: 'p1', text: 'En la matriz, la definición de cada variable debe estar:', options: [
    ['A','Basada en una fuente fiable/cita, no inventada'],
    ['B','Sacada de monografías sin verificar'],
    ['C','Solo basada en la opinión del equipo'],
    ['D','Sin necesidad de fuente si es “obvia”'],
  ], correct: ['A'] },

  { id: 'P1-17', parcial: 'p1', text: 'Los indicadores son:', options: [
    ['A','Los módulos de software implementados'],
    ['B','La forma de hacer medible/observable una dimensión/subdimensión'],
    ['C','Los objetivos específicos del proyecto'],
    ['D','Las hipótesis del marco teórico'],
  ], correct: ['B'] },

  { id: 'P1-18', parcial: 'p1', text: 'Elementos que típicamente aparecen en la matriz (pestañas de validación):', subtitle:'(Seleccione todas)', options: [
    ['A','Variable y definición'],
    ['B','Dimensiones'],
    ['C','Subdimensiones (si aplica)'],
    ['D','Indicadores'],
    ['E','Cómo se va a medir e instrumento'],
    ['F','Población objetivo y tiempo previsto'],
  ], correct: ['A','B','C','D','E','F'] },

  { id: 'P1-19', parcial: 'p1', text: 'En validación en la academia, “población objetivo” normalmente:', options: [
    ['A','Siempre es obligatoria y debe ser mínima de 100 personas'],
    ['B','No aplica en muchos casos porque se valida con pruebas sobre el código/sistema'],
    ['C','Debe ser solo usuarios reales externos'],
    ['D','Se reemplaza por “jurados de sustentación”'],
  ], correct: ['B'] },

  { id: 'P1-20', parcial: 'p1', text: 'La última pestaña “Estrategia a seguir” pide:', subtitle:'(Seleccione todas)', options: [
    ['A','Describir cómo evaluarán funcionalidad/rendimiento/usabilidad (lo que aplique)'],
    ['B','Qué evidencias/documentos generarán y cómo'],
    ['C','Qué método/estrategia usarán (encuesta, experimento, estudio de caso, etc.)'],
    ['D','Solo pegar capturas de pantalla sin explicación'],
  ], correct: ['A','B','C'] },

  // -------- PARCIAL 2 (Aplicación + ejemplo de usabilidad) --------
  { id: 'P2-01', parcial: 'p2', text: 'En validación dinámica, la docente sugiere que el proyecto se oriente por:', options: [
    ['A','El diseño de investigación para corroborar objetivo o responder la pregunta inicial'],
    ['B','La intuición del equipo sin mediciones'],
    ['C','Solo métricas de rendimiento del servidor'],
    ['D','Un análisis puramente contable'],
  ], correct: ['A'] },

  { id: 'P2-02', parcial: 'p2', text: 'Ejemplos de instrumentos para generar datos mencionados en la sesión:', subtitle:'(Seleccione todas)', options: [
    ['A','Entrevistas'],
    ['B','Observaciones'],
    ['C','Cuestionarios/encuestas'],
    ['D','Documentos'],
    ['E','Logs del sistema'],
    ['F','Solo “presentación final”'],
  ], correct: ['A','B','C','D','E'] },

  { id: 'P2-03', parcial: 'p2', text: 'Una pregunta de investigación recomendada para validación dinámica debería:', options: [
    ['A','Responderse con “sí/no” solamente'],
    ['B','Ser abierta (si es pregunta) o plantearse como hipótesis verificable (si es hipótesis)'],
    ['C','Ser idéntica al nombre del proyecto'],
    ['D','No mencionar variables'],
  ], correct: ['B'] },

  { id: 'P2-04', parcial: 'p2', text: 'Según el ejemplo, ¿cuál sería una variable independiente en el estudio de aulas virtuales?', options: [
    ['A','Motivación del aprendizaje'],
    ['B','Usabilidad'],
    ['C','Semestre del estudiante'],
    ['D','Cantidad de salones en la universidad'],
  ], correct: ['B'] },

  { id: 'P2-05', parcial: 'p2', text: 'Según el ejemplo, ¿cuál sería la variable dependiente?', options: [
    ['A','Usabilidad'],
    ['B','Motivación del aprendizaje'],
    ['C','Tiempo de lectura del marco teórico'],
    ['D','Cantidad de módulos del sistema'],
  ], correct: ['B'] },

  { id: 'P2-06', parcial: 'p2', text: 'En el ejemplo, la definición de “usabilidad” se apoya en:', options: [
    ['A','ISO 9126'],
    ['B','ISO 27001'],
    ['C','NIST 800-53'],
    ['D','OWASP Top 10'],
  ], correct: ['A'] },

  { id: 'P2-07', parcial: 'p2', text: 'La definición (ISO) de usabilidad en el ejemplo se centra en la capacidad del software de:', subtitle:'(Seleccione todas)', options: [
    ['A','Ser comprendido'],
    ['B','Ser aprendido'],
    ['C','Ser usado'],
    ['D','Ser atractivo para el usuario en condiciones específicas'],
    ['E','Garantizar disponibilidad 24/7 por SLA'],
  ], correct: ['A','B','C','D'] },

  { id: 'P2-08', parcial: 'p2', text: 'Dimensiones seleccionadas en el ejemplo para “usabilidad” (por tiempo):', subtitle:'(Seleccione todas)', options: [
    ['A','Facilidad de aprendizaje'],
    ['B','Facilidad de uso'],
    ['C','Confidencialidad'],
    ['D','Escalabilidad'],
  ], correct: ['A','B'] },

  { id: 'P2-09', parcial: 'p2', text: 'En el ejemplo, una subdimensión de “facilidad de aprendizaje” fue:', options: [
    ['A','Predictibilidad'],
    ['B','Exfiltración'],
    ['C','Consistencia transaccional'],
    ['D','Balance de carga'],
  ], correct: ['A'] },

  { id: 'P2-10', parcial: 'p2', text: 'Un indicador propuesto para la predictibilidad fue:', options: [
    ['A','Percepción del usuario sobre la dificultad para completar una tarea'],
    ['B','Número de paquetes por segundo'],
    ['C','Hash de contraseñas en base de datos'],
    ['D','Uso de certificados SSL'],
  ], correct: ['A'] },

  { id: 'P2-11', parcial: 'p2', text: 'Para medir percepción del usuario en el ejemplo, el instrumento sugerido fue:', options: [
    ['A','Logs del servidor'],
    ['B','Cuestionario tras interactuar con el sistema'],
    ['C','Análisis de código estático'],
    ['D','Firewall de aplicación (WAF)'],
  ], correct: ['B'] },

  { id: 'P2-12', parcial: 'p2', text: 'En “facilidad de uso”, la literatura del ejemplo usó las dimensiones:', subtitle:'(Seleccione todas)', options: [
    ['A','Eficacia'],
    ['B','Eficiencia'],
    ['C','Auditoría'],
    ['D','Reconocimiento'],
  ], correct: ['A','B'] },

  { id: 'P2-13', parcial: 'p2', text: 'Indicadores típicos propuestos para eficacia y eficiencia en el ejemplo:', subtitle:'(Seleccione todas)', options: [
    ['A','Completitud de una tarea'],
    ['B','Tiempo para completarla'],
    ['C','Cantidad de commits en Git'],
    ['D','Número de iconos en la UI'],
  ], correct: ['A','B'] },

  { id: 'P2-14', parcial: 'p2', text: 'Para medir “completitud de tarea” y “tiempo”, la docente sugirió que podía ser mejor:', options: [
    ['A','Observación directa de la interacción del usuario'],
    ['B','Solo percepción en encuesta, siempre'],
    ['C','Solo una entrevista abierta sin tareas'],
    ['D','No medir tiempo porque sesga el estudio'],
  ], correct: ['A'] },

  { id: 'P2-15', parcial: 'p2', text: '¿Por qué recomendó estudiantes de diferentes carreras/semestres como muestra?', options: [
    ['A','Para evitar sesgo por experiencia (variable extraña) y mejorar validez del resultado'],
    ['B','Porque así se reduce el tiempo a 1 día'],
    ['C','Porque la ISO lo exige'],
    ['D','Porque la validación estática lo requiere'],
  ], correct: ['A'] },

  { id: 'P2-16', parcial: 'p2', text: 'El tiempo estimado mencionado en el ejemplo (diseñar instrumento + aplicarlo) fue de:', options: [
    ['A','2 horas'],
    ['B','3 días'],
    ['C','15 días'],
    ['D','2 meses'],
  ], correct: ['C'] },

  { id: 'P2-17', parcial: 'p2', text: 'En validación en la academia, una variable común sugerida fue:', options: [
    ['A','Funcionalidad'],
    ['B','Motivación del aprendizaje'],
    ['C','Satisfacción del usuario final únicamente'],
    ['D','Cultura organizacional'],
  ], correct: ['A'] },

  { id: 'P2-18', parcial: 'p2', text: 'Para rendimiento como variable (academia), un indicador típico mencionado fue:', options: [
    ['A','Tiempo en que se procesa una solicitud'],
    ['B','Color del tema de la app'],
    ['C','Número de correos del equipo'],
    ['D','Cantidad de pantallas diseñadas'],
  ], correct: ['A'] },

  { id: 'P2-19', parcial: 'p2', text: 'En la matriz, “cómo se va a medir” se refiere a:', options: [
    ['A','Describir el procedimiento/ambiente de prueba o forma de capturar el dato (p.ej., logs, observación, cuestionario)'],
    ['B','Escribir la conclusión final antes de medir'],
    ['C','Poner solo el nombre del indicador'],
    ['D','Poner solo el nombre del integrante que mide'],
  ], correct: ['A'] },

  { id: 'P2-20', parcial: 'p2', text: '¿Qué afirmación es correcta sobre dimensiones y subdimensiones?', options: [
    ['A','Siempre son obligatorias y deben ser mínimo 10'],
    ['B','Las subdimensiones solo se usan si son necesarias; ayudan a aterrizar la variable'],
    ['C','Las dimensiones se escriben sin indicadores'],
    ['D','Dimensión y indicador son exactamente lo mismo'],
  ], correct: ['B'] },
];

// Dedupe defensivo por texto (por si hay repetidas exactas)
(function () {
  function normalizeText(s) {
    return (s || '').toLowerCase().replace(/\s+/g, ' ').trim();
  }
  function dedupeByText(arr) {
    const seen = new Set();
    const out = [];
    for (const q of arr) {
      const key = normalizeText(q.text);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(q);
    }
    return out;
  }
  RAW = dedupeByText(RAW);
})();
