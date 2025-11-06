let RAW = [
  // -------- PARCIAL 1 --------
  { id: 'P1-01', parcial: 'p1', text: '¿Cómo nos podemos defender contra los ataques de fuerza bruta a las contraseñas?', subtitle: '(Escoge todas las correctas)', options: [
    ['A','Incorporar sales en el hash de contraseñas'],
    ['B','Imponer el uso de contraseñas seguras'],
    ['C','Almacenar contraseñas en una tabla de arco iris'],
    ['D','Pasar las contraseñas por la función de hash varias veces (key stretching)'],
  ], correct: ['A','B','D'] },
  { id: 'P1-02', parcial: 'p1', text: '¿Cuántas tácticas tiene la matriz MITRE ATT&CK?', options: [
    ['A','25'],['B','+250'],['C','5'],['D','14']
  ], correct: ['D'] },
  { id: 'P1-03', parcial: 'p1', text: 'La táctica del RECONOCIMIENTO consiste en:', options: [
    ['A','Emplear tácticas para evitar ser detectado por los controles de seguridad'],
    ['B','Adquirir nombres de cuentas, contraseñas e info de autenticación alternativa'],
    ['C','Navegar dentro del entorno de destino para acceder a recursos adicionales'],
    ['D','Garantizar el acceso continuo al sistema comprometido y mantener un punto de apoyo'],
    ['E','Obtener el acceso inicial a una red de destino'],
    ['F','Extracción de datos confidenciales del entorno de destino para uso no autorizado'],
    ['G','Recopilación de información para planificar y diseñar estrategias para operaciones futuras'],
  ], correct: ['G'] },
  { id: 'P1-04', parcial: 'p1', text: '¿Qué ocurre si un virus informático infecta el e-commerce y modifica los precios en su sitio web?', options: [
    ['A','Se compromete la confidencialidad de los datos'],
    ['B','Se interrumpe la disponibilidad de la información'],
    ['C','Se viola la integridad de los registros'],
    ['D','(Opción de autenticidad/no aplica)'],
  ], correct: ['C'] },
  { id: 'P1-05', parcial: 'p1', text: '¿Cuál de las siguientes afirmaciones describe mejor la utilización de la criptografía asimétrica?', options: [
    ['A','Utiliza la misma clave para cifrar y descifrar (simétrica)'],
    ['B','Se usa clave privada para cifrar y pública para descifrar (enunciado impreciso)'],
    ['C','Cada usuario tiene un par de claves (pública y privada) para cifrar/descifrar de forma segura'],
    ['D','Utiliza una clave compartida entre emisor y receptor (simétrica)'],
  ], correct: ['C'] },
  { id: 'P1-06', parcial: 'p1', text: 'La ISO 27001 es un estándar certificable', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['A'] },
  { id: 'P1-07', parcial: 'p1', text: 'Cuanto más pequeña sea la clave de encriptación, más seguros estarán los datos cifrados', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['B'] },
  { id: 'P1-08', parcial: 'p1', text: '¿Cuáles son los principales servicios ofrecidos por las infraestructuras de clave pública (PKI)?', subtitle:'(Elige todas las correctas)', options: [
    ['A','Generación de tokens de autenticación'],
    ['B','Emisión y gestión de certificados digitales'],
    ['C','Gestión de claves públicas y privadas'],
    ['D','Validación de la identidad de usuarios y dispositivos'],
    ['E','Implementación de políticas de seguridad de red'],
  ], correct: ['B','C','D'] },
  { id: 'P1-09', parcial: 'p1', text: '¿Qué es una colisión de hash?', options: [
    ['A','Dos archivos idénticos generan diferentes resúmenes de hash'],
    ['B','Dos algoritmos de hash diferentes producen el mismo hash'],
    ['C','Dos archivos diferentes generan el mismo resumen de hash'],
    ['D','Un resumen de hash se invierte para recuperar el original'],
  ], correct: ['C'] },
  { id: 'P1-10', parcial: 'p1', text: '¿Cuál describe mejor el cifrado Vernam?', options: [
    ['A','Clave secreta compartida para cifrar/descifrar'],
    ['B','Clave pública para cifrar y privada para descifrar'],
    ['C','La misma clave para cifrar y descifrar (simétrica)'],
    ['D','Cifrado de flujo que combina el texto con una clave de igual longitud'],
  ], correct: ['D'] },
  { id: 'P1-11', parcial: 'p1', text: 'En un certificado SSL, la clave pública del servidor está firmada por una CA, garantizando la autenticidad del servidor.', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['A'] },
  { id: 'P1-12', parcial: 'p1', text: 'Acceso indebido a BD sensible por parte de empleado implica…', options: [
    ['A','Se compromete la integridad de la información'],
    ['B','Se viola la confidencialidad de los datos'],
    ['C','Se interrumpe la disponibilidad de la base de datos'],
    ['D','Se compromete la autenticidad de los registros'],
  ], correct: ['B'] },
  { id: 'P1-13', parcial: 'p1', text: 'Medidas para proteger el login de una plataforma web', subtitle:'(Seleccione todas)', options: [
    ['A','Hash seguro de contraseñas en BD'],
    ['B','MFA'],
    ['C','Contraseñas en texto plano'],
    ['D','Permitir contraseñas simples'],
    ['E','Certificado SSL durante el login'],
  ], correct: ['A','B','E'] },
  { id: 'P1-14', parcial: 'p1', text: 'Últimas dos versiones de ISO 27001', options: [
    ['A','Solo existe la 2022'],['B','2023 y 2013'],['C','2022 y 2014'],['D','2022 y 2025'],['E','2022 y 2013'],['F','2012 y 2013'],['G','2022 y 2012'],
  ], correct: ['E'] },
  { id: 'P1-15', parcial: 'p1', text: '¿Cuál NO pertenece a un buen algoritmo de hash?', options: [
    ['A','El mismo mensaje siempre produce el mismo hash'],
    ['B','Colisión de hash'],
    ['C','Determinismo'],
    ['D','No es reversible'],
  ], correct: ['B'] },
  { id: 'P1-16', parcial: 'p1', text: 'Primera subfase en auditoría de seguridad', options: [
    ['A','Post Explotación'],['B','Explotación'],['C','Fingerprinting'],['D','Footprinting']
  ], correct: ['D'] },
  { id: 'P1-17', parcial: 'p1', text: 'Caso apropiado para aplicar hash', options: [
    ['A','Garantizar disponibilidad'],['B','Almacenar contraseñas en una base de datos'],['C','Cifrar comunicación'],['D','Garantizar confidencialidad']
  ], correct: ['B'] },
  { id: 'P1-18', parcial: 'p1', text: 'Herramientas para fuerza bruta/diccionario vistas en clase', options: [
    ['A','John y CCrypt'],['B','John y HashRat'],['C','John y HashCat'],['D','HashRat y HashCat']
  ], correct: ['C'] },
  { id: 'P1-19', parcial: 'p1', text: 'Características del cifrado Polibio', subtitle:'(marque todas las válidas)', options: [
    ['A','Utiliza una tabla de sustitución para cifrar mensajes'],
    ['B','Es un cifrado de sustitución monoalfabético'],
    ['C','Convierte cada letra en un par de números'],
    ['D','Requiere clave secreta'],
    ['E','Es de transposición'],
  ], correct: ['A','B','C'] },
  { id: 'P1-20', parcial: 'p1', text: 'Componentes clave de una PKI', subtitle:'(marque todas las válidas)', options: [
    ['A','Autoridad de Certificación (CA)'],['B','Certificado de Antecedentes Penales (CAP)'],['C','Centro de Datos'],['D','Almacén de Claves (Key Store / HSM)'],['E','Servidor SMTP']
  ], correct: ['A','D'] },
  { id: 'P1-21', parcial: 'p1', text: 'En auditoría de seguridad, pensar con perspectiva ________.', options: [
    ['A','Atacante'],['B','Ofensiva'],['C','Hacker'],['D','Defensiva']
  ], correct: ['A'] },
  { id: 'P1-22', parcial: 'p1', text: 'Mejor descripción de seguridad de la información', options: [
    ['A','Responsabilidad exclusiva de TI'],
    ['B','Solo prevenir ataques externos'],
    ['C','Proceso integral que protege confidencialidad, integridad y disponibilidad'],
    ['D','Solo protección física'],
  ], correct: ['C'] },
  { id: 'P1-23', parcial: 'p1', text: 'Tipo de validación SSL con chequeo exhaustivo y barra verde (histórica)', options: [
    ['A','Validación extendida'],['B','Validación organizativa'],['C','Validación de dominio'],['D','Nivel básico']
  ], correct: ['A'] },
  { id: 'P1-24', parcial: 'p1', text: 'Movimiento lateral consiste en…', options: [
    ['A','Adquirir credenciales'],['B','Entender el entorno'],['C','Navegar para acceder a recursos adicionales'],['D','Planear estrategias futuras'],['E','Manipular/destruir objetivos'],['F','Preparar recursos'],['G','Evadir defensas']
  ], correct: ['C'] },
  { id: 'P1-25', parcial: 'p1', text: 'Exfiltración consiste en…', options: [
    ['A','Entender el entorno'],['B','Extracción de datos confidenciales para uso no autorizado'],['C','Recopilar datos para objetivos del atacante'],['D','Movimiento lateral'],['E','C2 remoto'],
  ], correct: ['B'] },
  { id: 'P1-26', parcial: 'p1', text: 'ISO 27001:2022 anexo A separa controles en ___ grupos.', options: [
    ['A','5'],['B','4'],['C','3'],['D','6']
  ], correct: ['B'] },
  { id: 'P1-27', parcial: 'p1', text: 'En un certificado SSL, la clave pública del servidor está firmada por una CA…', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['A'] },
  { id: 'P1-28', parcial: 'p1', text: 'Firma electrónica con máximas garantías legales', options: [
    ['A','Firma electrónica simple'],['B','Firma digital'],['C','Firma manuscrita'],['D','Firma electrónica avanzada']
  ], correct: ['D'] },
  { id: 'P1-29', parcial: 'p1', text: 'Algoritmo eficiente para grandes volúmenes con una sola clave', options: [
    ['A','ECDSA'],['B','RSA'],['C','Diffie-Hellman'],['D','AES']
  ], correct: ['D'] },
  { id: 'P1-30', parcial: 'p1', text: 'En un certificado SSL, la clave pública del servidor está firmada…', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['A'] },
];

// -------- PARCIAL 2 --------
RAW.push(
  { id: 'P2-01', parcial: 'p2', text: 'La táctica de la EXFILTRACIÓN consiste en…', options: [
    ['A','Movimiento lateral'],['B','Evadir defensas'],['C','Recopilar datos relevantes'],['D','Entender el entorno'],['E','Extracción de datos confidenciales'],['G','C2 remoto']
  ], correct: ['E'] },
  { id: 'P2-02', parcial: 'p2', text: 'La táctica del RECONOCIMIENTO consiste en…', options: [
    ['A','Recopilar información para planear futuras operaciones'],['B','Mantener punto de apoyo'],['C','Acceso inicial'],['D','Adquirir credenciales'],['E','Movimiento lateral'],['F','Exfiltración'],['G','Evadir defensas']
  ], correct: ['A'] },
  { id: 'P2-03', parcial: 'p2', text: '¿Cuál describe mejor el cifrado Vernam?', options: [
    ['A','Clave pública/privada'],['B','Flujo + clave de igual longitud'],['C','Misma clave para cifrar/descifrar'],['D','Clave secreta compartida']
  ], correct: ['B'] },
  { id: 'P2-04', parcial: 'p2', text: 'Primera subfase de investigación en auditoría', options: [
    ['A','Footprinting'],['B','Post Explotación'],['C','Fingerprinting'],['D','Explotación']
  ], correct: ['A'] },
  { id: 'P2-05', parcial: 'p2', text: 'Los “pawns” son conscientes de que ayudan al atacante.', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['B'] },
  { id: 'P2-06', parcial: 'p2', text: 'Tipo de validación SSL con verificación exhaustiva', options: [
    ['A','Nivel básico'],['B','Validación organizativa'],['C','Validación de dominio'],['D','Validación extendida']
  ], correct: ['D'] },
  { id: 'P2-07', parcial: 'p2', text: 'ISO 27001:2022 — anexo A en ___ grupos', options: [
    ['A','6'],['B','4'],['C','5'],['D','3']
  ], correct: ['B'] },
  { id: 'P2-08', parcial: 'p2', text: '¿Por qué el Preprocesamiento es crucial en biometría?', options: [
    ['A','Genera claves criptográficas'],['B','Cifra plantillas'],['C','Autenticación previa al registro'],['D','Mejora calidad y reduce ruido']
  ], correct: ['D'] },
  { id: 'P2-09', parcial: 'p2', text: 'La fijación de sesión ocurre cuando…', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['A'] },
  { id: 'P2-10', parcial: 'p2', text: 'Malware que cifra archivos y exige pago', options: [
    ['A','Spyware'],['B','Ransomware'],['C','Troyano'],['D','Adware']
  ], correct: ['B'] },
  { id: 'P2-11', parcial: 'p2', text: 'Orden correcto de fases APT', subtitle:'(b,a,d,c,f,e,g)', options: [
    ['A','b,a,d,c,f,e,g'],['B','b,d,a,c,f,e,g'],['C','b,a,f,d,e,c,g'],['D','b,a,d,c,e,f,g']
  ], correct: ['A'] },
  { id: 'P2-12', parcial: 'p2', text: 'Sobre “información crítica” (seleccione todas)', options: [
    ['A','Su pérdida no afecta continuidad'],['B','Su pérdida puede interrumpir operaciones'],['C','Es fundamental para objetivos y actividades'],['D','Es secundaria']
  ], correct: ['B','C'] },
  { id: 'P2-13', parcial: 'p2', text: 'Firma electrónica con máximas garantías', options: [
    ['A','Firma electrónica avanzada'],['B','Firma digital'],['C','Firma electrónica simple'],['D','Firma manuscrita']
  ], correct: ['A'] },
  { id: 'P2-14', parcial: 'p2', text: 'ISO 27001 es certificable', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['A'] },
  { id: 'P2-15', parcial: 'p2', text: 'Amenazas se clasifican en…', options: [
    ['A','Internas y Externas'],['B','Info / Lógica'],['C','Software / Hardware'],['D','Físicas / Aplicaciones']
  ], correct: ['A'] },
  { id: 'P2-16', parcial: 'p2', text: 'CVE es una lista de identificadores únicos de vulnerabilidades', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['A'] },
  { id: 'P2-17', parcial: 'p2', text: 'Seguridad de la información en una organización', options: [
    ['A','Solo protección física'],['B','Proceso integral que protege CID'],['C','Exclusivo de TI'],['D','Solo ataques externos']
  ], correct: ['B'] },
  { id: 'P2-18', parcial: 'p2', text: 'MITRE técnica asociada a robar credenciales en memoria', options: [
    ['A','Keylogging'],['B','Explotar kernel'],['C','Credential Dumping'],['D','Pass-the-Hash']
  ], correct: ['C'] },
  { id: 'P2-19', parcial: 'p2', text: '¿Cuántas tácticas tiene MITRE ATT&CK?', options: [
    ['A','+250'],['B','25'],['C','14'],['D','5']
  ], correct: ['C'] },
  { id: 'P2-20', parcial: 'p2', text: 'Características del cifrado de Polibio (seleccione todas)', options: [
    ['A','Requiere clave secreta'],['B','Tabla de sustitución'],['C','Par de números por letra'],['D','Transposición'],['E','Sustitución monoalfabética']
  ], correct: ['B','C','E'] },
  { id: 'P2-21', parcial: 'p2', text: '¿Cuál NO pertenece a un buen hash?', options: [
    ['A','No es reversible'],['B','Mismo mensaje = mismo hash'],['C','Colisión de hash'],['D','Determinismo']
  ], correct: ['C'] },
  { id: 'P2-22', parcial: 'p2', text: 'Google Dorking es…', options: [
    ['A','Programa de Google de IA'],['B','Phishing que usa Google'],['C','Búsqueda avanzada con operadores para info sensible/no indexada'],['D','Búsquedas en Google Drive']
  ], correct: ['C'] },
  { id: 'P2-23', parcial: 'p2', text: 'Operación hábil, discreta y prolongada dirigida a objetivo específico', options: [
    ['A','Vulnerabilidad'],['B','CVE'],['C','Amenaza'],['D','APT']
  ], correct: ['D'] },
  { id: 'P2-24', parcial: 'p2', text: 'En un certificado SSL la CA firma la clave pública del servidor…', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['A'] },
  { id: 'P2-25', parcial: 'p2', text: 'Vida / multimodal / cripto biométrica — afirmación correcta', options: [
    ['A','Liveness activa pide acciones; pasiva detecta rasgos (reflejos, microexpresiones)'],
    ['B','Algoritmos homomórficos no permiten procesar sin descifrar'],
    ['C','Multimodal exige misma plantilla'],
    ['D','Protección con cifrado homomórfico “no se usa”']
  ], correct: ['A'] },
  { id: 'P2-26', parcial: 'p2', text: 'Empareje conceptos: Botnet, Vector de ataque, DDoS, Backdoor (orden 1→4)', options: [
    ['A','D, B, A, C'],['B','B, A, C, D'],['C','A, B, D, C'],['D','D, A, C, B']
  ], correct: ['A'] },
  { id: 'P2-27', parcial: 'p2', text: 'Herramientas para fuerza bruta vistas en clase', options: [
    ['A','John y HashRat'],['B','John y HashCat'],['C','John y CCrypt'],['D','HashRat y HashCat']
  ], correct: ['B'] },
  { id: 'P2-28', parcial: 'p2', text: 'En un certificado SSL la CA firma la clave pública del servidor…', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['A'] },
  { id: 'P2-29', parcial: 'p2', text: 'En auditoría, pensar con perspectiva ________.', options: [
    ['A','Atacante'],['B','Ofensiva'],['C','Hacker'],['D','Defensiva']
  ], correct: ['A'] },
  { id: 'P2-30', parcial: 'p2', text: 'Sobre vulnerabilidades (elige todas)', options: [
    ['A','Se resuelven una vez descubiertas'],['B','Ponen en riesgo CID'],['C','Se producen por alta protección']
  ], correct: ['A','B'] },
  { id: 'P2-31', parcial: 'p2', text: 'Clave más pequeña = ¿más segura?', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['B'] },
  { id: 'P2-32', parcial: 'p2', text: 'MITRE — malware que altera el MBR para bloquear acceso', options: [
    ['A','Initial Access'],['B','Impact'],['C','Exfiltration'],['D','Privilege Escalation']
  ], correct: ['B'] },
  { id: 'P2-33', parcial: 'p2', text: 'Orden correcto APT (E D A F G B C)', options: [
    ['A','EDAFGBC'],['B','EDAFGCB'],['C','DAFGEBC'],['D','ADEBCFG']
  ], correct: ['A'] },
  { id: 'P2-34', parcial: 'p2', text: 'Últimas dos versiones de ISO 27001', options: [
    ['A','2012 y 2013'],['B','2022 y 2013'],['C','2022 y 2014'],['D','Solo 2022'],['E','2023 y 2013'],['F','2022 y 2025'],['G','2022 y 2012']
  ], correct: ['B'] },
  { id: 'P2-35', parcial: 'p2', text: '¿Qué FW filtra por puertos y estado de conexión?', options: [
    ['A','FW Red'],['B','FW host'],['C','FW Aplicación'],['D','FW Puertos']
  ], correct: ['A'] },
  { id: 'P2-36', parcial: 'p2', text: 'Elementos clave de seguridad lógica', options: [
    ['A','Anti-malware, RRHH, controles de acceso y seguridad física'],
    ['B','Seguridad física, anti-malware, RRHH, biométrica'],
    ['C','CID'],
    ['D','Controles de acceso, seguridad física, anti-malware']
  ], correct: ['A'] },
  { id: 'P2-37', parcial: 'p2', text: 'Sobre vulnerabilidades (elige todas)', options: [
    ['A','Se producen por alta protección'],['B','Pueden resolverse al descubrirse'],['C','Nunca comprometen integridad'],['D','Ponen en riesgo CID']
  ], correct: ['B','D'] },
  { id: 'P2-38', parcial: 'p2', text: 'Medidas para proteger login (elige todas)', options: [
    ['A','MFA'],['B','Permitir contraseñas simples'],['C','Guardar contraseñas en texto plano'],['D','SSL/TLS en el navegador'],['E','Hash seguro en BD']
  ], correct: ['A','D','E'] },
  { id: 'P2-39', parcial: 'p2', text: 'Tecnología para prevenir spyware/adware', options: [
    ['A','antispyware'],['B','Antivirus Red'],['C','Firewall'],['D','WAF']
  ], correct: ['A'] },
  { id: 'P2-40', parcial: 'p2', text: 'Tipo de XSS que no persiste en servidor (se ejecuta al visitar)', options: [
    ['A','XSS persistente'],['B','XSS basado en DOM'],['C','Inyección SQL'],['D','XSS reflejado']
  ], correct: ['D'] },
  { id: 'P2-41', parcial: 'p2', text: 'La táctica del MOVIMIENTO LATERAL consiste en…', options: [
    ['A','Acceder a recursos adicionales'],['B','Evadir defensas'],['C','Impactar sistemas'],['D','Preparar recursos']
  ], correct: ['A'] },
  { id: 'P2-42', parcial: 'p2', text: 'Usuario que puede iniciar sesión por Telnet con contraseña en blanco', options: [
    ['A','root'],['B','sysadmin'],['C','superadmin'],['D','admin']
  ], correct: ['A'] },
  { id: 'P2-43', parcial: 'p2', text: 'ISO 27001:2022 — protección de activos físicos (seleccione todas)', options: [
    ['A','Firewalls y antivirus'],['B','Monitoreo de redes internas'],['C','Servidores resguardados y control de accesos'],['D','Restringir uso de USB en estaciones']
  ], correct: ['C','D'] },
  { id: 'P2-44', parcial: 'p2', text: 'Componentes clave de una PKI (seleccione todas)', options: [
    ['A','Autoridad de Certificación (CA)'],['B','Centro de Datos'],['C','Almacén de Claves (Key Store / HSM)'],['D','SMTP'],['E','CAP']
  ], correct: ['A','C'] },
  { id: 'P2-45', parcial: 'p2', text: 'Acceso indebido a BD sensible implica…', options: [
    ['A','Integridad'],['B','Confidencialidad'],['C','Disponibilidad'],['D','Autenticidad']
  ], correct: ['B'] },
  { id: 'P2-46', parcial: 'p2', text: 'El spyware no afecta rendimiento porque es invisible.', options: [
    ['A','Verdadero'],['B','Falso']
  ], correct: ['B'] },
  { id: 'P2-47', parcial: 'p2', text: 'Principales servicios PKI (seleccione todas)', options: [
    ['A','Emisión y gestión de certificados'],['B','Validación de identidad'],['C','Generación de tokens'],['D','Políticas de seguridad de red'],['E','Gestión de claves públicas y privadas']
  ], correct: ['A','B','E'] },
  { id: 'P2-48', parcial: 'p2', text: '¿Qué distingue esteganografía de criptografía?', options: [
    ['A','Cripto transforma; estego oculta en un medio'],['B','Estego solo en imágenes'],['C','Estego cifra'],['D','Cripto no altera estructura']
  ], correct: ['A'] },
  { id: 'P2-49', parcial: 'p2', text: '¿Qué es seguridad informática? (seleccione las correctas)', options: [
    ['A','Proteger info de sistemas para mitigar amenazas, riesgos y ataques'],
    ['B','Proteger confidencialidad de info, sistemas y redes de amenazas/riesgos/ataques'],
    ['C','Proteger integridad de info, sistemas y redes de amenazas/riesgos/ataques'],
    ['D','Proteger info digital, sistemas y redes de amenazas/riesgos/ataques']
  ], correct: ['A','B','D'] },
  { id: 'P2-50', parcial: 'p2', text: 'Técnica de esteganografía que modifica bits menos significativos', options: [
    ['A','Espacios en blanco en texto'],['B','LSB'],['C','ASCII'],['D','Cifrado simétrico + estego']
  ], correct: ['B'] }
);

// -------- PARCIAL 3 al 7 --------
RAW.push(
  // === ISO 9001:2015 ===
  { id: 'P3-01', parcial: 'p3', text: 'La ISO 9001:2015 es un estándar enfocado a:', options: [
    ['A','Gestión de seguridad de la información'],
    ['B','Gestión de continuidad del negocio'],
    ['C','Gestión de la calidad'],
    ['D','Gestión ambiental']
  ], correct: ['C'] },

  { id: 'P3-02', parcial: 'p3', text: 'La orientación a procesos en ISO 9001 implica:', options: [
    ['A','Documentar todos los puestos de trabajo'],
    ['B','Gestionar entradas, actividades, salidas e interacciones entre procesos'],
    ['C','Eliminar la variabilidad del personal'],
    ['D','Medir y controlar los procesos con indicadores']
  ], correct: ['B','D'] },

  { id: 'P3-03', parcial: 'p3', text: 'La alta dirección debe:', options: [
    ['A','Delegar completamente el SGC en el responsable de calidad'],
    ['B','Demostrar liderazgo y compromiso con el SGC'],
    ['C','Asegurar la política de calidad y los objetivos'],
    ['D','Auditar cada proceso personalmente']
  ], correct: ['B','C'] },

  { id: 'P3-04', parcial: 'p3', text: '“Pensamiento basado en riesgos” significa:', options: [
    ['A','Evitar tomar riesgos siempre'],
    ['B','Estimar riesgos solo en producción'],
    ['C','Determinar riesgos y oportunidades que pueden afectar el SGC'],
    ['D','Subcontratar la gestión de riesgos']
  ], correct: ['C'] },

  { id: 'P3-05', parcial: 'p3', text: 'La política de calidad debe ser:', options: [
    ['A','Confidencial y solo para el equipo directivo'],
    ['B','Apropiada al propósito y contexto de la organización'],
    ['C','Comunicada, entendida y aplicada dentro de la organización'],
    ['D','No requiere revisión']
  ], correct: ['B','C'] },

  { id: 'P3-06', parcial: 'p3', text: 'Partes interesadas (interested parties) según ISO 9001 incluyen:', options: [
    ['A','Solo los clientes'],
    ['B','Clientes, proveedores, reguladores, personal y otros relevantes'],
    ['C','Únicamente accionistas'],
    ['D','Competidores directos']
  ], correct: ['B'] },

  { id: 'P3-07', parcial: 'p3', text: 'Respecto a la documentación (información documentada):', options: [
    ['A','Se exige un manual de calidad obligatorio'],
    ['B','Se requiere la información documentada necesaria para la eficacia del SGC'],
    ['C','Incluye documentos y registros'],
    ['D','No se exige control de cambios']
  ], correct: ['B','C'] },

  { id: 'P3-08', parcial: 'p3', text: 'Los objetivos de calidad deben ser:', options: [
    ['A','Declarativos y sin métricas'],
    ['B','Medibles, coherentes con la política y comunicados'],
    ['C','Estáticos por todo el ciclo de vida'],
    ['D','Secretos para evitar presión']
  ], correct: ['B'] },

  { id: 'P3-09', parcial: 'p3', text: 'La planificación de cambios en el SGC debe considerar:', options: [
    ['A','Solo cronograma'],
    ['B','Propósito del cambio y consecuencias potenciales'],
    ['C','Integridad del SGC y recursos'],
    ['D','No aplica a cambios urgentes']
  ], correct: ['B','C'] },

  { id: 'P3-10', parcial: 'p3', text: 'La competencia del personal se asegura:', options: [
    ['A','Con un curso anual genérico'],
    ['B','Determinando competencias necesarias y tomando acciones para alcanzarlas'],
    ['C','Por autoevaluación voluntaria'],
    ['D','Reteniendo evidencia de competencia (registros)']
  ], correct: ['B','D'] },

  { id: 'P3-11', parcial: 'p3', text: 'En comunicación del SGC la organización debe definir:', options: [
    ['A','Solo “qué” comunicar'],
    ['B','Qué, cuándo, con quién, cómo y quién comunica'],
    ['C','Solo comunicaciones externas'],
    ['D','Solo comunicaciones internas']
  ], correct: ['B'] },

  { id: 'P3-12', parcial: 'p3', text: 'Diseño y desarrollo (cuando aplica) debe:', options: [
    ['A','Omitirse si hay poco tiempo'],
    ['B','Planificarse, con entradas/salidas definidas y controles de revisión, verificación y validación'],
    ['C','Validarse únicamente con el cliente'],
    ['D','Documentarse opcionalmente']
  ], correct: ['B'] },

  { id: 'P3-13', parcial: 'p3', text: 'Control de procesos, productos y servicios proporcionados externamente (proveedores):', options: [
    ['A','Se confía ciegamente en el proveedor'],
    ['B','Se definen criterios de evaluación, selección y seguimiento'],
    ['C','No se requiere información a proveedores'],
    ['D','Se asegura que lo externo cumple requisitos']
  ], correct: ['B','D'] },

  { id: 'P3-14', parcial: 'p3', text: 'En producción y provisión del servicio se debe asegurar:', options: [
    ['A','Solo inspección final'],
    ['B','Condiciones controladas, equipos adecuados, personal competente'],
    ['C','Publicidad del producto'],
    ['D','Solo pruebas destructivas']
  ], correct: ['B'] },

  { id: 'P3-15', parcial: 'p3', text: 'Identificación y trazabilidad aplica para:', options: [
    ['A','Marketing'],
    ['B','Cuando sea necesario para la conformidad del producto/servicio'],
    ['C','Solo en farmacéutica'],
    ['D','No es parte de ISO 9001']
  ], correct: ['B'] },

  { id: 'P3-16', parcial: 'p3', text: 'Liberación de productos y servicios:', options: [
    ['A','Siempre se libera por tiempo de entrega'],
    ['B','Debe verificarse que se cumplen los criterios de aceptación antes de la liberación'],
    ['C','Solo requiere firma del gerente comercial'],
    ['D','No requiere evidencia']
  ], correct: ['B'] },

  { id: 'P3-17', parcial: 'p3', text: 'Control de salidas no conformes:', options: [
    ['A','Se entrega con descuento'],
    ['B','Se corrigen, contienen, devuelven o se aceptan bajo concesión autorizada'],
    ['C','Se ignoran si el cliente no reclama'],
    ['D','Se conserva información documentada de la no conformidad y acciones']
  ], correct: ['B','D'] },

  { id: 'P3-18', parcial: 'p3', text: 'Seguimiento, medición, análisis y evaluación exige:', options: [
    ['A','Medir todo, siempre'],
    ['B','Determinar qué se debe medir, métodos, cuándo y cuándo analizar/evaluar'],
    ['C','Solo encuestas de satisfacción'],
    ['D','Informes semestrales a ISO']
  ], correct: ['B'] },

  { id: 'P3-19', parcial: 'p3', text: 'Auditoría interna debe:', options: [
    ['A','Realizarla quien gestiona el proceso auditado'],
    ['B','Planificarse con criterios y alcance; asegurar objetividad e imparcialidad'],
    ['C','Hacerse solo si hay no conformidades'],
    ['D','No requiere registros']
  ], correct: ['B'] },

  { id: 'P3-20', parcial: 'p3', text: 'Revisión por la dirección debe considerar:', options: [
    ['A','Solo finanzas'],
    ['B','Cambios en contexto, desempeño del SGC, resultados de auditorías, quejas, riesgos y oportunidades'],
    ['C','Únicamente ventas'],
    ['D','Rotación de personal']
  ], correct: ['B'] },

  // === Alta Disponibilidad (HA) y DRP ===
  { id: 'P4-01', parcial: 'p4', text: '¿Qué busca garantizar un diseño de Alta Disponibilidad (HA)?', options: [
    ['A','Ahorro energético'],['B','Continuidad de los servicios ante fallas'],['C','Aislamiento de redes OT'],['D','Evitar copias de seguridad']
  ], correct: ['B'] },

  { id: 'P4-02', parcial: 'p4', text: 'En HA, la conmutación automática (failover) sirve para:', options: [
    ['A','Balancear cargas entre países'],['B','Cambiar al nodo de respaldo ante fallas sin intervención manual'],['C','Encriptar datos en reposo'],['D','Bloquear tráfico malicioso']
  ], correct: ['B'] },

  { id: 'P4-03', parcial: 'p4', text: 'El RPO define:', options: [
    ['A','Tiempo para volver a producción'],['B','Máxima pérdida aceptable de datos'],['C','Ventana de verificación tras recuperar'],['D','Tiempo total de inactividad tolerable']
  ], correct: ['B'] },

  { id: 'P4-04', parcial: 'p4', text: 'El RTO define:', options: [
    ['A','Tiempo para verificar integridad'],['B','Máxima pérdida de datos'],['C','Tiempo máximo para volver a estar en línea'],['D','Frecuencia de respaldos']
  ], correct: ['C'] },

  { id: 'P4-05', parcial: 'p4', text: 'El WRT corresponde a:', options: [
    ['A','Tiempo de auditoría de proveedores'],['B','Tiempo para verificar integridad y dejar todo operativo'],['C','Tiempo entre fallas'],['D','Tiempo medio de reparación']
  ], correct: ['B'] },

  // === Vulnerabilidades y APT ===
  { id: 'P5-01', parcial: 'p5', text: 'En XSS reflejado:', options: [
    ['A','El script queda almacenado en el servidor'],['B','El script se ejecuta en el cliente sin almacenarse'],['C','Requiere WebSockets'],['D','Solo afecta extensiones del navegador']
  ], correct: ['B'] },

  { id: 'P5-02', parcial: 'p5', text: 'Una medida clave contra XSS es:', options: [
    ['A','Desactivar HTTPS'],['B','Aceptar cualquier HTML del usuario'],['C','Escapar/encodear caracteres especiales'],['D','Usar eval() para limpiar']
  ], correct: ['C'] },

  { id: 'P5-03', parcial: 'p5', text: 'En SQL Injection, una práctica insegura es:', options: [
    ['A','Consultas parametrizadas'],['B','Escapar caracteres especiales'],['C','Concatenar entrada del usuario directamente'],['D','Validar tipos de datos']
  ], correct: ['C'] },

  { id: 'P5-04', parcial: 'p5', text: 'En la cadena de una APT, “movimiento lateral” significa:', options: [
    ['A','Encriptar respaldos'],['B','Expandir control a otros sistemas dentro de la red'],['C','Eliminar logs'],['D','Hacer DDoS al perímetro']
  ], correct: ['B'] },

  { id: 'P5-05', parcial: 'p5', text: 'Riesgo residual de una APT tras la “limpieza”:', options: [
    ['A','Total erradicación garantizada'],['B','Puertas traseras pueden permanecer'],['C','No afecta rendimiento'],['D','Solo afecta IoT']
  ], correct: ['B'] },

  // === Ethical Hacking ===
  { id: 'P6-01', parcial: 'p6', text: 'Hacker de sombrero blanco (White Hat):', options: [
    ['A','Explota y monetiza datos'],['B','Hace pruebas autorizadas para mejorar seguridad'],['C','Causa daño controlado'],['D','Solo reporta a la prensa']
  ], correct: ['B'] },

  { id: 'P6-02', parcial: 'p6', text: 'Sombrero gris (Grey Hat):', options: [
    ['A','Siempre actúa con contrato formal'],['B','Siempre malicioso'],['C','Puede cruzar límites; a veces actúa ético, a veces no'],['D','Solo ataca telecomunicaciones']
  ], correct: ['C'] },

  { id: 'P6-03', parcial: 'p6', text: 'Red Team se enfoca en:', options: [
    ['A','Respuesta a incidentes'],['B','Simular adversarios y explotar vulnerabilidades'],['C','Gobernanza y políticas'],['D','Gestión de parches']
  ], correct: ['B'] },

  { id: 'P6-04', parcial: 'p6', text: 'Blue Team se caracteriza por:', options: [
    ['A','Monitoreo continuo y defensa proactiva'],['B','Emula amenazas externas'],['C','Solo reacciona a incidentes graves'],['D','Diseño de hardware']
  ], correct: ['A'] },

  { id: 'P6-05', parcial: 'p6', text: 'Purple Team:', options: [
    ['A','Reemplaza al Red y Blue'],['B','Coordina Red y Blue para maximizar eficacia'],['C','Solo hace auditorías de DNS'],['D','Es exclusivamente ofensivo']
  ], correct: ['B'] },

  // === Dispositivos y medidas de prevención DDoS ===
  { id: 'P7-01', parcial: 'p7', text: 'En anomalías TLS, un contenido fuera del rango 20–24:', options: [
    ['A','Se acepta siempre'],['B','Se descarta como anómalo'],['C','Solo se registra'],['D','Se reintenta']
  ], correct: ['B'] },

  { id: 'P7-02', parcial: 'p7', text: 'Mitigaciones frente a SYN Flood incluyen:', options: [
    ['A','Permitir conexiones ilimitadas'],['B','Limitar conexiones por IP y filtrar en firewall'],['C','Deshabilitar TCP'],['D','Migrar a ICMP']
  ], correct: ['B'] },

  { id: 'P7-03', parcial: 'p7', text: 'En ataque de amplificación NTP (monlist), una defensa es:', options: [
    ['A','Habilitar versiones antiguas'],['B','Deshabilitar monlist/actualizar a 4.2.7+'],['C','Cambiar a HTTP'],['D','Bajar MTU']
  ], correct: ['B'] },

  { id: 'P7-04', parcial: 'p7', text: 'Memcached DDoS se aprovecha de que Memcached:', options: [
    ['A','Es un IDS'],['B','Es un sistema de caché en memoria de alto rendimiento'],['C','Es un WAF'],['D','Es un SIEM']
  ], correct: ['B'] },

  { id: 'P7-05', parcial: 'p7', text: 'Un IDS/IPS puede ayudar a:', options: [
    ['A','Aumentar la latencia deliberadamente'],['B','Identificar tráfico anómalo y bloquearlo (IPS)'],['C','Traducir direcciones (NAT)'],['D','Filtrar solo tráfico saliente']
  ], correct: ['B'] }
);

// -------- PARCIAL 8 al 10 --------
RAW.push(
  // === Evaluación de Riesgos ===
  { id: 'P8-01', parcial: 'p8', text: 'Fórmula básica para riesgo cuantitativo:', options: [
    ['A','RIESGO = Impacto / Probabilidad'],
    ['B','RIESGO = Probabilidad x Impacto'],
    ['C','RIESGO = MTTR x MTBF'],
    ['D','RIESGO = RPO + RTO']
  ], correct: ['B'] },

  { id: 'P8-02', parcial: 'p8', text: 'Tras evaluar, se trata el riesgo que supera umbral:', options: [
    ['A','Se ignora'],
    ['B','Se documenta y ya'],
    ['C','Se prioriza según política (≥4 o “Medio”)'],
    ['D','Se terceriza siempre']
  ], correct: ['C'] },

  { id: 'P8-03', parcial: 'p8', text: 'Ejemplo de transferir riesgo:', options: [
    ['A','Eliminar el servicio'],
    ['B','Aceptar el riesgo'],
    ['C','Contratar un seguro'],
    ['D','Aumentar backup']
  ], correct: ['C'] },

  { id: 'P8-04', parcial: 'p8', text: 'Un análisis cualitativo usa:', options: [
    ['A','Monte Carlo'],
    ['B','Matriz de riesgos'],
    ['C','Test t de Student'],
    ['D','Árboles de decisión']
  ], correct: ['B'] },

  { id: 'P8-05', parcial: 'p8', text: 'Un ejemplo de amenaza a considerar con enfoque práctico:', options: [
    ['A','Meteorito al CPD'],
    ['B','Daños por agua/fuego'],
    ['C','Invasión extraterrestre'],
    ['D','Tormenta solar en Marte']
  ], correct: ['B'] },

  // === VPN, NAT y Firewall ===
  { id: 'P9-01', parcial: 'p9', text: 'IPsec opera en la:', options: [
    ['A','Capa de aplicación'],
    ['B','Capa de red'],
    ['C','Capa física'],
    ['D','Capa de presentación']
  ], correct: ['B'] },

  { id: 'P9-02', parcial: 'p9', text: 'Túnel dividido de VPN permite:', options: [
    ['A','Solo tráfico por el túnel'],
    ['B','Dividir tráfico entre Internet directa y túnel cifrado'],
    ['C','Multiplicar IPs públicas'],
    ['D','Deshabilitar cifrado']
  ], correct: ['B'] },

  { id: 'P9-03', parcial: 'p9', text: 'VPN de acceso remoto también llamada:', options: [
    ['A','VPN site-to-site'],
    ['B','VPN basada en cliente / cliente-servidor'],
    ['C','VPN móvil'],
    ['D','L3VPN']
  ], correct: ['B'] },

  { id: 'P9-04', parcial: 'p9', text: 'Diferencia correcta SNAT/DNAT:', options: [
    ['A','DNAT cambia origen; SNAT cambia destino'],
    ['B','Ambos cambian destino'],
    ['C','DNAT cambia destino entrante; SNAT cambia origen saliente'],
    ['D','Ambos cambian origen']
  ], correct: ['C'] },

  { id: 'P9-05', parcial: 'p9', text: 'Un NGFW agrega a un firewall clásico:', options: [
    ['A','Solo NAT'],
    ['B','Inspección a nivel aplicación e IPS'],
    ['C','DNSSEC'],
    ['D','DHCP']
  ], correct: ['B'] },

  // === DMZ y dispositivos perimetrales ===
  { id: 'P10-01', parcial: 'p10', text: 'Una DMZ es:', options: [
    ['A','Una VLAN interna para IoT'],
    ['B','Subred entre Internet y redes privadas que expone servicios con firewalls'],
    ['C','Red de respaldo offline'],
    ['D','Segmento solo para bases de datos']
  ], correct: ['B'] },

  { id: 'P10-02', parcial: 'p10', text: 'Flujo típico en DMZ:', options: [
    ['A','DMZ → LAN siempre permitido'],
    ['B','Internet y LAN pueden entrar a DMZ; DMZ → LAN no permitido'],
    ['C','Solo LAN → DMZ'],
    ['D','Solo Internet → LAN']
  ], correct: ['B'] },

  { id: 'P10-03', parcial: 'p10', text: 'Beneficio de DMZ:', options: [
    ['A','Evitar necesidad de firewall externo'],
    ['B','Prevención de reconocimiento de red y segmentación adicional'],
    ['C','Reemplaza a los respaldos'],
    ['D','Sustituye al WAF']
  ], correct: ['B'] },

  { id: 'P10-04', parcial: 'p10', text: 'Un servicio típico en DMZ:', options: [
    ['A','Controlador de dominio interno'],
    ['B','Servidor DNS/FTP/Correo/Proxy/Web'],
    ['C','ERP financiero principal'],
    ['D','NAS con copias sensibles']
  ], correct: ['B'] },

  { id: 'P10-05', parcial: 'p10', text: 'Función perimetral básica:', options: [
    ['A','Permitir todo y registrar'],
    ['B','Resistir, identificar, aislar/segmentar y filtrar/bloquear'],
    ['C','Solo NAT'],
    ['D','Solo QoS']
  ], correct: ['B'] }
);

// === Deduplicador final ===
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