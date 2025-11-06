
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
      { id: 'P1-11', parcial: 'p1', text: 'En un certificado SSL, la clave pública del servidor está firmada por una CA, garantizando la autenticidad del servidor.', options: [["A","Verdadero"],["B","Falso"]], correct: ['A'] },
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
      { id: 'P1-27', parcial: 'p1', text: 'En un certificado SSL, la clave pública del servidor está firmada por una CA…', options: [["A","Verdadero"],["B","Falso"]], correct: ['A'] },
      { id: 'P1-28', parcial: 'p1', text: 'Firma electrónica con máximas garantías legales', options: [
        ['A','Firma electrónica simple'],['B','Firma digital'],['C','Firma manuscrita'],['D','Firma electrónica avanzada']
      ], correct: ['D'] },
      { id: 'P1-29', parcial: 'p1', text: 'Algoritmo eficiente para grandes volúmenes con una sola clave', options: [
        ['A','ECDSA'],['B','RSA'],['C','Diffie-Hellman'],['D','AES']
      ], correct: ['D'] },
      { id: 'P1-30', parcial: 'p1', text: 'En un certificado SSL, la clave pública del servidor está firmada…', options: [["A","Verdadero"],["B","Falso"]], correct: ['A'] },

      // -------- PARCIAL 2 --------
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
      { id: 'P2-05', parcial: 'p2', text: 'Los “pawns” son conscientes de que ayudan al atacante.', options: [["A","Verdadero"],["B","Falso"]], correct: ['B'] },
      { id: 'P2-06', parcial: 'p2', text: 'Tipo de validación SSL con verificación exhaustiva', options: [
        ['A','Nivel básico'],['B','Validación organizativa'],['C','Validación de dominio'],['D','Validación extendida']
      ], correct: ['D'] },
      { id: 'P2-07', parcial: 'p2', text: 'ISO 27001:2022 — anexo A en ___ grupos', options: [["A","6"],["B","4"],["C","5"],["D","3"]], correct: ['B'] },
      { id: 'P2-08', parcial: 'p2', text: '¿Por qué el Preprocesamiento es crucial en biometría?', options: [
        ['A','Genera claves criptográficas'],['B','Cifra plantillas'],['C','Autenticación previa al registro'],['D','Mejora calidad y reduce ruido']
      ], correct: ['D'] },
      { id: 'P2-09', parcial: 'p2', text: 'La fijación de sesión ocurre cuando…', options: [["A","Verdadero"],["B","Falso"]], correct: ['A'] },
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
      { id: 'P2-14', parcial: 'p2', text: 'ISO 27001 es certificable', options: [["A","Verdadero"],["B","Falso"]], correct: ['A'] },
      { id: 'P2-15', parcial: 'p2', text: 'Amenazas se clasifican en…', options: [
        ['A','Internas y Externas'],['B','Info / Lógica'],['C','Software / Hardware'],['D','Físicas / Aplicaciones']
      ], correct: ['A'] },
      { id: 'P2-16', parcial: 'p2', text: 'CVE es una lista de identificadores únicos de vulnerabilidades', options: [["A","Verdadero"],["B","Falso"]], correct: ['A'] },
      { id: 'P2-17', parcial: 'p2', text: 'Seguridad de la información en una organización', options: [
        ['A','Solo protección física'],['B','Proceso integral que protege CID'],['C','Exclusivo de TI'],['D','Solo ataques externos']
      ], correct: ['B'] },
      { id: 'P2-18', parcial: 'p2', text: 'MITRE técnica asociada a robar credenciales en memoria', options: [
        ['A','Keylogging'],['B','Explotar kernel'],['C','Credential Dumping'],['D','Pass-the-Hash']
      ], correct: ['C'] },
      { id: 'P2-19', parcial: 'p2', text: '¿Cuántas tácticas tiene MITRE ATT&CK?', options: [["A","+250"],["B","25"],["C","14"],["D","5"]], correct: ['C'] },
      { id: 'P2-20', parcial: 'p2', text: 'Características del cifrado de Polibio (seleccione todas)', options: [
        ['A','Requiere clave secreta'],['B','Tabla de sustitución'],['C','Par de números por letra'],['D','Transposición'],['E','Sustitución monoalfabética']
      ], correct: ['B','C','E'] },
      { id: 'P2-21', parcial: 'p2', text: '¿Cuál NO pertenece a un buen hash?', options: [["A","No es reversible"],["B","Mismo mensaje = mismo hash"],["C","Colisión de hash"],["D","Determinismo"]], correct: ['C'] },
      { id: 'P2-22', parcial: 'p2', text: 'Google Dorking es…', options: [
        ['A','Programa de Google de IA'],['B','Phishing que usa Google'],['C','Búsqueda avanzada con operadores para info sensible/no indexada'],['D','Búsquedas en Google Drive']
      ], correct: ['C'] },
      { id: 'P2-23', parcial: 'p2', text: 'Operación hábil, discreta y prolongada dirigida a objetivo específico', options: [["A","Vulnerabilidad"],["B","CVE"],["C","Amenaza"],["D","APT"]], correct: ['D'] },
      { id: 'P2-24', parcial: 'p2', text: 'En un certificado SSL la CA firma la clave pública del servidor…', options: [["A","Verdadero"],["B","Falso"]], correct: ['A'] },
      { id: 'P2-25', parcial: 'p2', text: 'Vida / multimodal / cripto biométrica — afirmación correcta', options: [
        ['A','Liveness activa pide acciones; pasiva detecta rasgos (reflejos, microexpresiones)'],
        ['B','Algoritmos homomórficos no permiten procesar sin descifrar'],
        ['C','Multimodal exige misma plantilla'],
        ['D','Protección con cifrado homomórfico “no se usa”'],
      ], correct: ['A'] },
      { id: 'P2-26', parcial: 'p2', text: 'Empareje conceptos: Botnet, Vector de ataque, DDoS, Backdoor (orden 1→4)', options: [
        ['A','D, B, A, C'],['B','B, A, C, D'],['C','A, B, D, C'],['D','D, A, C, B']
      ], correct: ['A'] },
      { id: 'P2-27', parcial: 'p2', text: 'Herramientas para fuerza bruta vistas en clase', options: [
        ['A','John y HashRat'],['B','John y HashCat'],['C','John y CCrypt'],['D','HashRat y HashCat']
      ], correct: ['B'] },
      { id: 'P2-28', parcial: 'p2', text: 'En un certificado SSL la CA firma la clave pública del servidor…', options: [["A","Verdadero"],["B","Falso"]], correct: ['A'] },
      { id: 'P2-29', parcial: 'p2', text: 'En auditoría, pensar con perspectiva ________.', options: [["A","Atacante"],["B","Ofensiva"],["C","Hacker"],["D","Defensiva"]], correct: ['A'] },
      { id: 'P2-30', parcial: 'p2', text: 'Sobre vulnerabilidades (elige todas)', options: [
        ['A','Se resuelven una vez descubiertas'],['B','Ponen en riesgo CID'],['C','Se producen por alta protección']
      ], correct: ['A','B'] },
      { id: 'P2-31', parcial: 'p2', text: 'Clave más pequeña = ¿más segura?', options: [["A","Verdadero"],["B","Falso"]], correct: ['B'] },
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
        ['D','Controles de acceso, seguridad física, anti-malware'],
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
      { id: 'P2-42', parcial: 'p2', text: 'Usuario que puede iniciar sesión por Telnet con contraseña en blanco', options: [["A","root"],["B","sysadmin"],["C","superadmin"],["D","admin"]], correct: ['A'] },
      { id: 'P2-43', parcial: 'p2', text: 'ISO 27001:2022 — protección de activos físicos (seleccione todas)', options: [
        ['A','Firewalls y antivirus'],['B','Monitoreo de redes internas'],['C','Servidores resguardados y control de accesos'],['D','Restringir uso de USB en estaciones']
      ], correct: ['C','D'] },
      { id: 'P2-44', parcial: 'p2', text: 'Componentes clave de una PKI (seleccione todas)', options: [
        ['A','Autoridad de Certificación (CA)'],['B','Centro de Datos'],['C','Almacén de Claves (Key Store / HSM)'],['D','SMTP'],['E','CAP']
      ], correct: ['A','C'] },
      { id: 'P2-45', parcial: 'p2', text: 'Acceso indebido a BD sensible implica…', options: [
        ['A','Integridad'],['B','Confidencialidad'],['C','Disponibilidad'],['D','Autenticidad']
      ], correct: ['B'] },
      { id: 'P2-46', parcial: 'p2', text: 'El spyware no afecta rendimiento porque es invisible.', options: [["A","Verdadero"],["B","Falso"]], correct: ['B'] },
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
        ['D','Proteger info digital, sistemas y redes de amenazas/riesgos/ataques'],
      ], correct: ['A','B','D'] },
      { id: 'P2-50', parcial: 'p2', text: 'Técnica de esteganografía que modifica bits menos significativos', options: [
        ['A','Espacios en blanco en texto'],['B','LSB'],['C','ASCII'],['D','Cifrado simétrico + estego']
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
