
(() => {

    const ColorearComentarios = (codigo) => {
        // Expresión regular para encontrar comentarios SQL
        const regex = /(--.*?$|\/\*[\s\S]*?\*\/)/gm;
            return codigo.replace(regex, (match) => {
                return `<span class="show-com">${match}</span>`;
            }   
        );
    }

   const ColorearCadenas = (codigo) => {
        let resultado = ""
        for (let i = 0; i < codigo.length; i++) {
            if (codigo[i] === '"' || codigo[i] === "'" || codigo[i] === "`") {
                let car = codigo[i]
                resultado += "<span class='show-string'>" + codigo[i] + "</span>"
                i++
                while (i < codigo.length && codigo[i] !== car) {
                    if (car === '`') {
                        if (codigo[i] === '$') {
                            while (i < codigo.length && codigo[i] !== '}') {
                                resultado += "<span class='show-res'>" + codigo[i] + "</span>"
                                i++
                            }
                            if (codigo[i] === '}') {
                                resultado += "<span class='show-res'>" + codigo[i] + "</span>"
                                i++
                            }
                        } else {
                            resultado += "<span class='show-string'>" + codigo[i] + "</span>"
                            i++
                        }
                    } else {
                        resultado += "<span class='show-string'>" + codigo[i] + "</span>"
                        i++
                    }
                }
                if (i < codigo.length && codigo[i] === car) {
                    resultado += "<span class='show-string'>" + codigo[i] + "</span>"
                }
            } else {
                resultado += codigo[i]
            }
        }

        return resultado
    }

    const Init = () => {
        document.querySelectorAll('.cod-sql').forEach((element) => {
            let codigo = element.innerHTML;

            // Primero colorear cadenas y comentarios
            codigo = ColorearCadenas(codigo);
            codigo = ColorearComentarios(codigo);
            
            // Función auxiliar para reemplazar solo fuera de spans
            const reemplazarFueraDeSpans = (codigo, patron, reemplazo) => {
                return codigo.replace(patron, (match) => {
                    // Si el match está dentro de un span, no reemplazar
                    const indexMatch = codigo.indexOf(match);
                    if (indexMatch !== -1) {
                        // Buscar si el match está dentro de un span coloreado
                        const beforeMatch = codigo.substring(0, indexMatch);
                        const lastSpanClose = beforeMatch.lastIndexOf('</span>');
                        const lastSpanOpen = beforeMatch.lastIndexOf('<span');
                        
                        // Si hay un span abierto después del último cierre, está dentro de un span
                        if (lastSpanOpen > lastSpanClose) {
                            return match;
                        }
                    }
                    return reemplazo;
                });
            };

            // Métodos SQL
            codigo = codigo.replace(/\b(EXISTS|exists)\b(?![^<]*<\/span>)/g, '<span class="show-claves">EXISTS</span>');
            codigo = codigo.replace(/\b(GO|go)\b/g, '<span class="show-claves">GO</span>');
            codigo = codigo.replace(/\b(USE|use)\b[\s]+/g, '<span class="show-claves">USE </span>');
            codigo = codigo.replace(/\b(OUTPUT|output)\b(?![^<]*<\/span>)/g, '<span class="show-claves">OUTPUT</span>');
            codigo = codigo.replace(/\b(TINYINT|tinyint)\b(?![^<]*<\/span>)/g, '<span class="show-claves">TINYINT</span>');
            codigo = codigo.replace(/\b(NOCOUNT|nocount)\b(?![^<]*<\/span>)/g, '<span class="show-claves">NOCOUNT</span>');
            codigo = codigo.replace(/\b(NOW|now)\b(?![^<]*<\/span>)/g, '<span class="show-met">NOW</span>');
            codigo = codigo.replace(/\b(RAISERROR|raiserror)\b(?![^<]*<\/span>)/g, '<span class="show-claves">RAISERROR</span>');
            codigo = codigo.replace(/\b(SUBSTRING|substring)\b(?![^<]*<\/span>)/g, '<span class="show-met">SUBSTRING</span>');
            codigo = codigo.replace(/\b(ERROR_MESSAGE|error_message)\b(?![^<]*<\/span>)/g, '<span class="show-met">ERROR_MESSAGE</span>');
            codigo = codigo.replace(/\b(ERROR_STATE|error_state)\b(?![^<]*<\/span>)/g, '<span class="show-met">ERROR_STATE</span>');
            codigo = codigo.replace(/\b(ERROR_SEVERITY|error_severity)\b(?![^<]*<\/span>)/g, '<span class="show-met">ERROR_SEVERITY</span>');
            codigo = codigo.replace(/\b(LEN|len)\b(?![^<]*<\/span>)/g, '<span class="show-met">LEN</span>');
            codigo = codigo.replace(/\b(ISNULL|isnull)\b(?![^<]*<\/span>)/g, '<span class="show-met">ISNULL</span>');
            codigo = codigo.replace(/\b(GETDATE|getdate)\b(?![^<]*<\/span>)/g, '<span class="show-met">GETDATE</span>');
            codigo = codigo.replace(/\b(CONCAT|concat)\b(?![^<]*<\/span>)/g, '<span class="show-met">CONCAT</span>');
            codigo = codigo.replace(/\b(ROUND|round)\b(?![^<]*<\/span>)/g, '<span class="show-met">ROUND</span>');
            codigo = codigo.replace(/\b(CAST|cast)\b(?![^<]*<\/span>)/g, '<span class="show-met">CAST</span>');
            codigo = codigo.replace(/\b(CONVERT|convert)\b(?![^<]*<\/span>)/g, '<span class="show-met">CONVERT</span>');
            codigo = codigo.replace(/\b(NOW|now)\b(?![^<]*<\/span>)/g, '<span class="show-met">NOW</span>');
             
            // Palabras clave SQL principales
            codigo = codigo.replace(/\b(CHAR|char)\b(?![^<]*<\/span>)/g, '<span class="show-claves">CHAR</span>');
            codigo = codigo.replace(/\b(TRANSACTION|transaction)\b(?![^<]*<\/span>)/g, '<span class="show-claves">TRANSACTION</span>');
            codigo = codigo.replace(/\b(ON|on)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ON</span>');
            codigo = codigo.replace(/\b(GROUP|group)\b(?![^<]*<\/span>)/g, '<span class="show-claves">GROUP</span>');
            codigo = codigo.replace(/\b(ORDER|order)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ORDER</span>');
            codigo = codigo.replace(/\b(BY|by)\b(?![^<]*<\/span>)/g, '<span class="show-claves">BY</span>');
            codigo = codigo.replace(/\b(SELECT|select)\b(?![^<]*<\/span>)/g, '<span class="show-claves">SELECT</span>');
            codigo = codigo.replace(/\b(FROM|from)\b(?![^<]*<\/span>)/g, '<span class="show-claves">FROM</span>');
            codigo = codigo.replace(/\b(WHERE|where)\b(?![^<]*<\/span>)/g, '<span class="show-claves">WHERE</span>');
            codigo = codigo.replace(/\b(INSERT|insert)\b(?![^<]*<\/span>)/g, '<span class="show-claves">INSERT</span>');
            codigo = codigo.replace(/\b(UPDATE|update)\b(?![^<]*<\/span>)/g, '<span class="show-claves">UPDATE</span>');
            codigo = codigo.replace(/\b(DELETE|delete)\b(?![^<]*<\/span>)/g, '<span class="show-claves">DELETE</span>');
            codigo = codigo.replace(/\b(CURSOR|cursor)\b(?![^<]*<\/span>)/g, '<span class="show-claves">CURSOR</span>');
            codigo = codigo.replace(/\b(FUNCTION|function)\b(?![^<]*<\/span>)/g, '<span class="show-claves">FUNCTION</span>');
            codigo = codigo.replace(/\b(CREATE|create)\b(?![^<]*<\/span>)/g, '<span class="show-claves">CREATE</span>');
            codigo = codigo.replace(/\b(TABLE|table)\b(?![^<]*<\/span>)/g, '<span class="show-claves">TABLE</span>');
            codigo = codigo.replace(/\b(VALUES|values)\b(?![^<]*<\/span>)/g, '<span class="show-claves">VALUES</span>');
            codigo = codigo.replace(/\b(INTO|into)\b(?![^<]*<\/span>)/g, '<span class="show-claves">INTO</span>');
            codigo = codigo.replace(/\b(AND|and)\b(?![^<]*<\/span>)/g, '<span class="show-claves">AND</span>');
            codigo = codigo.replace(/\b(OR|or)\b(?![^<]*<\/span>)/g, '<span class="show-claves">OR</span>');
            codigo = codigo.replace(/\b(ALTER|alter)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ALTER</span>');
            codigo = codigo.replace(/\b(DROP|drop)\b(?![^<]*<\/span>)/g, '<span class="show-claves">DROP</span>');
            codigo = codigo.replace(/\b(BEGIN|begin)\b(?![^<]*<\/span>)/g, '<span class="show-claves">BEGIN</span>');
            codigo = codigo.replace(/\b(END|end)\b(?![^<]*<\/span>)/g, '<span class="show-claves">END</span>');
            codigo = codigo.replace(/\b(RETURNS|returns)\b(?![^<]*<\/span>)/g, '<span class="show-claves">RETURNS</span>');
            codigo = codigo.replace(/\b(RETURN|return)\b(?![^<]*<\/span>)/g, '<span class="show-claves">RETURN</span>');
            codigo = codigo.replace(/\b(INT|int)\b(?![^<]*<\/span>)/g, '<span class="show-claves">INT</span>');
            codigo = codigo.replace(/\b(VARCHAR|varchar)\b(?![^<]*<\/span>)/g, '<span class="show-claves">VARCHAR</span>');
            codigo = codigo.replace(/\b(DECIMAL|decimal)\b(?![^<]*<\/span>)/g, '<span class="show-claves">DECIMAL</span>');
            codigo = codigo.replace(/\b(FLOAT|float)\b(?![^<]*<\/span>)/g, '<span class="show-claves">FLOAT</span>');
            codigo = codigo.replace(/\b(JOIN|join)\b(?![^<]*<\/span>)/g, '<span class="show-claves">JOIN</span>');
            codigo = codigo.replace(/\b(INNER|inner)\b(?![^<]*<\/span>)/g, '<span class="show-claves">INNER</span>');
            codigo = codigo.replace(/\b(LEFT|left)\b(?![^<]*<\/span>)/g, '<span class="show-claves">LEFT</span>');
            codigo = codigo.replace(/\b(RIGHT|right)\b(?![^<]*<\/span>)/g, '<span class="show-claves">RIGHT</span>');
            codigo = codigo.replace(/\b(FULL|full)\b(?![^<]*<\/span>)/g, '<span class="show-claves">FULL</span>');
            codigo = codigo.replace(/\b(OUTER|outer)\b(?![^<]*<\/span>)/g, '<span class="show-claves">OUTER</span>');
            codigo = codigo.replace(/\b(ON|on)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ON</span>');
            codigo = codigo.replace(/\b(GROUP\s+BY|group\s+by)\b(?![^<]*<\/span>)/g, '<span class="show-claves">GROUP BY</span>');
            codigo = codigo.replace(/\b(ORDER\s+BY|order\s+by)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ORDER BY</span>');
            codigo = codigo.replace(/\b(HAVING|having)\b(?![^<]*<\/span>)/g, '<span class="show-claves">HAVING</span>');
            codigo = codigo.replace(/\b(DISTINCT|distinct)\b(?![^<]*<\/span>)/g, '<span class="show-claves">DISTINCT</span>');
            codigo = codigo.replace(/\b(PRIMARY|primary)\b(?![^<]*<\/span>)/g, '<span class="show-claves">PRIMARY</span>');
            codigo = codigo.replace(/\b(KEY|key)\b(?![^<]*<\/span>)/g, '<span class="show-claves">KEY</span>');
            codigo = codigo.replace(/\b(FOREIGN|foreign)\b(?![^<]*<\/span>)/g, '<span class="show-claves">FOREIGN</span>');
            codigo = codigo.replace(/\b(CONSTRAINT|constraint)\b(?![^<]*<\/span>)/g, '<span class="show-claves">CONSTRAINT</span>');
            codigo = codigo.replace(/\b(UNIQUE|unique)\b(?![^<]*<\/span>)/g, '<span class="show-claves">UNIQUE</span>');
            codigo = codigo.replace(/\b(NOT|not)\b(?![^<]*<\/span>)/g, '<span class="show-claves">NOT</span>');
            codigo = codigo.replace(/\b(NULL|null)\b(?![^<]*<\/span>)/g, '<span class="show-claves">NULL</span>');
            codigo = codigo.replace(/\b(IS|is)\b(?![^<]*<\/span>)/g, '<span class="show-claves">IS</span>');
            codigo = codigo.replace(/\b(LIKE|like)\b(?![^<]*<\/span>)/g, '<span class="show-claves">LIKE</span>');
            codigo = codigo.replace(/\b(IN|in)\b(?![^<]*<\/span>)/g, '<span class="show-claves">IN</span>');
            codigo = codigo.replace(/\b(BETWEEN|between)\b(?![^<]*<\/span>)/g, '<span class="show-claves">BETWEEN</span>');
            codigo = codigo.replace(/\b(UNION|union)\b(?![^<]*<\/span>)/g, '<span class="show-claves">UNION</span>');
            codigo = codigo.replace(/\b(UNION\s+ALL|union\s+all)\b(?![^<]*<\/span>)/g, '<span class="show-claves">UNION ALL</span>');
            codigo = codigo.replace(/\b(EXCEPT|except)\b(?![^<]*<\/span>)/g, '<span class="show-claves">EXCEPT</span>');
            codigo = codigo.replace(/\b(INTERSECT|intersect)\b(?![^<]*<\/span>)/g, '<span class="show-claves">INTERSECT</span>');
            codigo = codigo.replace(/\b(CASE|case)\b(?![^<]*<\/span>)/g, '<span class="show-claves">CASE</span>');
            codigo = codigo.replace(/\b(WHEN|when)\b(?![^<]*<\/span>)/g, '<span class="show-claves">WHEN</span>');
            codigo = codigo.replace(/\b(THEN|then)\b(?![^<]*<\/span>)/g, '<span class="show-claves">THEN</span>');
            codigo = codigo.replace(/\b(ELSE|else)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ELSE</span>');
            codigo = codigo.replace(/\b(BIT|bit)\b(?![^<]*<\/span>)/g, '<span class="show-claves">BIT</span>');
            codigo = codigo.replace(/\b(DATETIME|datetime)\b(?![^<]*<\/span>)/g, '<span class="show-claves">DATETIME</span>');
            codigo = codigo.replace(/\b(DATE|date)\b(?![^<]*<\/span>)/g, '<span class="show-claves">DATE</span>');
            codigo = codigo.replace(/\b(TIME|time)\b(?![^<]*<\/span>)/g, '<span class="show-claves">TIME</span>');
            codigo = codigo.replace(/\b(NVARCHAR|nvarchar)\b(?![^<]*<\/span>)/g, '<span class="show-claves">NVARCHAR</span>');
            codigo = codigo.replace(/\b(BIGINT|bigint)\b(?![^<]*<\/span>)/g, '<span class="show-claves">BIGINT</span>');
            codigo = codigo.replace(/\b(SMALLINT|smallint)\b(?![^<]*<\/span>)/g, '<span class="show-claves">SMALLINT</span>');
            codigo = codigo.replace(/\b(TINYINT|tinyint)\b(?![^<]*<\/span>)/g, '<span class="show-claves">TINYINT</span>');
            codigo = codigo.replace(/\b(EXEC|exec)\b(?![^<]*<\/span>)/g, '<span class="show-claves">EXEC</span>');
            codigo = codigo.replace(/\b(DECLARE|declare)\b(?![^<]*<\/span>)/g, '<span class="show-claves">DECLARE</span>');
            codigo = codigo.replace(/\b(SET|set)\b(?![^<]*<\/span>)/g, '<span class="show-claves">SET</span>');
            codigo = codigo.replace(/\b(OFFSET|offset)\b(?![^<]*<\/span>)/g, '<span class="show-claves">OFFSET</span>');
            codigo = codigo.replace(/\b(FETCH|fetch)\b(?![^<]*<\/span>)/g, '<span class="show-claves">FETCH</span>');
            codigo = codigo.replace(/\b(ROWS|rows)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ROWS</span>');
            codigo = codigo.replace(/\b(ONLY|only)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ONLY</span>');
            codigo = codigo.replace(/\b(CROSS|cross)\b(?![^<]*<\/span>)/g, '<span class="show-claves">CROSS</span>');
            codigo = codigo.replace(/\b(CHECK|check)\b(?![^<]*<\/span>)/g, '<span class="show-claves">CHECK</span>');
            codigo = codigo.replace(/\b(DEFAULT|default)\b(?![^<]*<\/span>)/g, '<span class="show-claves">DEFAULT</span>');
            codigo = codigo.replace(/\b(EXISTS|exists)\b(?![^<]*<\/span>)/g, '<span class="show-claves">EXISTS</span>');
            codigo = codigo.replace(/\b(ALL|all)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ALL</span>');
            codigo = codigo.replace(/\b(ANY|any)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ANY</span>');
            codigo = codigo.replace(/\b(SOME|some)\b(?![^<]*<\/span>)/g, '<span class="show-claves">SOME</span>');
            codigo = codigo.replace(/\b(COLLATE|collate)\b(?![^<]*<\/span>)/g, '<span class="show-claves">COLLATE</span>');
            codigo = codigo.replace(/\b(PROCEDURE|procedure)\b(?![^<]*<\/span>)/g, '<span class="show-claves">PROCEDURE</span>');
            codigo = codigo.replace(/\b(TRIGGER|trigger)\b(?![^<]*<\/span>)/g, '<span class="show-claves">TRIGGER</span>');
            
           
            codigo = codigo.replace(/\b(COMMIT|commit)\b(?![^<]*<\/span>)/g, '<span class="show-claves">COMMIT</span>');
            codigo = codigo.replace(/\b(ROLLBACK|rollback)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ROLLBACK</span>');
            codigo = codigo.replace(/\b(ASC|asc)\b(?![^<]*<\/span>)/g, '<span class="show-claves">ASC</span>');
            codigo = codigo.replace(/\b(DESC|desc)\b(?![^<]*<\/span>)/g, '<span class="show-claves">DESC</span>');
            codigo = codigo.replace(/\b(LIMIT|limit)\b(?![^<]*<\/span>)/g, '<span class="show-claves">LIMIT</span>');
            codigo = codigo.replace(/\b(TOP|top)\b(?![^<]*<\/span>)/g, '<span class="show-claves">TOP</span>');
            codigo = codigo.replace(/\b(WITH|with)\b(?![^<]*<\/span>)/g, '<span class="show-claves">WITH</span>');
            codigo = codigo.replace(/\b(SUM|sum)\b(?![^<]*<\/span>)/g, '<span class="show-met">SUM</span>');
            codigo = codigo.replace(/\b(COUNT|count)\b(?![^<]*<\/span>)/g, '<span class="show-met">COUNT</span>');
            codigo = codigo.replace(/\b(AVG|avg)\b(?![^<]*<\/span>)/g, '<span class="show-met">AVG</span>');
            codigo = codigo.replace(/\b(MAX|max)\b(?![^<]*<\/span>)/g, '<span class="show-met">MAX</span>');
            codigo = codigo.replace(/\b(MIN|min)\b(?![^<]*<\/span>)/g, '<span class="show-met">MIN</span>');
            codigo = codigo.replace(/\b(GRANT|grant)\b(?![^<]*<\/span>)/g, '<span class="show-claves">GRANT</span>');
            codigo = codigo.replace(/\b(REVOKE|revoke)\b(?![^<]*<\/span>)/g, '<span class="show-claves">REVOKE</span>');
            codigo = codigo.replace(/\b(INDEX|index)\b(?![^<]*<\/span>)/g, '<span class="show-claves">INDEX</span>');
            codigo = codigo.replace(/\b(VIEW|view)\b(?![^<]*<\/span>)/g, '<span class="show-claves">VIEW</span>');
            codigo = codigo.replace(/\b(IDENTITY|identity)\b(?![^<]*<\/span>)/g, '<span class="show-claves">IDENTITY</span>');
            codigo = codigo.replace(/\b(SCHEMA|schema)\b(?![^<]*<\/span>)/g, '<span class="show-claves">SCHEMA</span>');
            codigo = codigo.replace(/\b(IF|if)\b(?![^<]*<\/span>)/g, '<span class="show-claves">IF</span>');
            codigo = codigo.replace(/\b(TRY|try)\b(?![^<]*<\/span>)/g, '<span class="show-claves">TRY</span>');
            codigo = codigo.replace(/\b(CATCH|catch)\b(?![^<]*<\/span>)/g, '<span class="show-claves">CATCH</span>');
            codigo = codigo.replace(/\[/g, '<span class="show-eti">[</span>');
            codigo = codigo.replace(/\]/g, '<span class="show-eti">]</span>');
            codigo = codigo.replace(/0/g, '<span class="show-numeros">0</span>');
            codigo = codigo.replace(/1/g, '<span class="show-numeros">1</span>');
            codigo = codigo.replace(/2/g, '<span class="show-numeros">2</span>');
            codigo = codigo.replace(/3/g, '<span class="show-numeros">3</span>');
            codigo = codigo.replace(/4/g, '<span class="show-numeros">0</span>');
            codigo = codigo.replace(/5/g, '<span class="show-numeros">1</span>');
            codigo = codigo.replace(/6/g, '<span class="show-numeros">2</span>');
            codigo = codigo.replace(/7/g, '<span class="show-numeros">3</span>');
            codigo = codigo.replace(/8/g, '<span class="show-numeros">0</span>');
            codigo = codigo.replace(/9/g, '<span class="show-numeros">1</span>');

            element.innerHTML = codigo;
        });
    }


    const CodigoSql = {
        Init : () => Init()
    }

    window.CodigoSql = CodigoSql;
})()

export default CodigoSql;

