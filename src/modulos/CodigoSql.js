
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
            codigo = codigo.replace(/(USE|use)(?![^<]*<\/span>)/g, '<span class="show-claves">USE</span>');
            codigo = codigo.replace(/(OUTPUT|output)(?![^<]*<\/span>)/g, '<span class="show-claves">OUTPUT</span>');
            codigo = codigo.replace(/(TINYINT|tinyint)(?![^<]*<\/span>)/g, '<span class="show-claves">TINYINT</span>');
            codigo = codigo.replace(/(NOCOUNT|nocount)(?![^<]*<\/span>)/g, '<span class="show-claves">NOCOUNT</span>');
            codigo = codigo.replace(/(NOW|now)(?![^<]*<\/span>)/g, '<span class="show-met">NOW</span>');
            codigo = codigo.replace(/(RAISERROR|raiserror)(?![^<]*<\/span>)/g, '<span class="show-claves">RAISERROR</span>');
            codigo = codigo.replace(/(SUBSTRING|substring)(?![^<]*<\/span>)/g, '<span class="show-met">SUBSTRING</span>');
            codigo = codigo.replace(/(LEN|len)(?![^<]*<\/span>)/g, '<span class="show-met">LEN</span>');
            codigo = codigo.replace(/(ISNULL|isnull)(?![^<]*<\/span>)/g, '<span class="show-met">ISNULL</span>');
            codigo = codigo.replace(/(GETDATE|getdate)(?![^<]*<\/span>)/g, '<span class="show-met">GETDATE</span>');
            codigo = codigo.replace(/(CONCAT|concat)(?![^<]*<\/span>)/g, '<span class="show-met">CONCAT</span>');
            codigo = codigo.replace(/(ROUND|round)(?![^<]*<\/span>)/g, '<span class="show-met">ROUND</span>');
            codigo = codigo.replace(/(CAST|cast)(?![^<]*<\/span>)/g, '<span class="show-met">CAST</span>');
            codigo = codigo.replace(/(CONVERT|convert)(?![^<]*<\/span>)/g, '<span class="show-met">CONVERT</span>');
            codigo = codigo.replace(/(NOW|now)(?![^<]*<\/span>)/g, '<span class="show-met">NOW</span>');
             
            // Palabras clave SQL principales
             codigo = codigo.replace(/(TRANSACTION|transaction)(?![^<]*<\/span>)/g, '<span class="show-claves">TRANSACTION</span>');
            codigo = codigo.replace(/(ON|on)(?![^<]*<\/span>)/g, '<span class="show-claves">ON</span>');
            codigo = codigo.replace(/(GROUP|group)(?![^<]*<\/span>)/g, '<span class="show-claves">GROUP</span>');
            codigo = codigo.replace(/(ORDER|order)(?![^<]*<\/span>)/g, '<span class="show-claves">ORDER</span>');
            codigo = codigo.replace(/(BY|by)(?![^<]*<\/span>)/g, '<span class="show-claves">BY</span>');
            codigo = codigo.replace(/(SELECT|select)(?![^<]*<\/span>)/g, '<span class="show-claves">SELECT</span>');
            codigo = codigo.replace(/(FROM|from)(?![^<]*<\/span>)/g, '<span class="show-claves">FROM</span>');
            codigo = codigo.replace(/(WHERE|where)(?![^<]*<\/span>)/g, '<span class="show-claves">WHERE</span>');
            codigo = codigo.replace(/(INSERT|insert)(?![^<]*<\/span>)/g, '<span class="show-claves">INSERT</span>');
            codigo = codigo.replace(/(UPDATE|update)(?![^<]*<\/span>)/g, '<span class="show-claves">UPDATE</span>');
            codigo = codigo.replace(/(DELETE|delete)(?![^<]*<\/span>)/g, '<span class="show-claves">DELETE</span>');
            codigo = codigo.replace(/(CURSOR|cursor)(?![^<]*<\/span>)/g, '<span class="show-claves">CURSOR</span>');
            codigo = codigo.replace(/(FUNCTION|function)(?![^<]*<\/span>)/g, '<span class="show-claves">FUNCTION</span>');
            codigo = codigo.replace(/(CREATE|create)(?![^<]*<\/span>)/g, '<span class="show-claves">CREATE</span>');
            codigo = codigo.replace(/(TABLE|table)(?![^<]*<\/span>)/g, '<span class="show-claves">TABLE</span>');
            codigo = codigo.replace(/(VALUES|values)(?![^<]*<\/span>)/g, '<span class="show-claves">VALUES</span>');
            codigo = codigo.replace(/(INTO|into)(?![^<]*<\/span>)/g, '<span class="show-claves">INTO</span>');
            codigo = codigo.replace(/(AND|and)(?![^<]*<\/span>)/g, '<span class="show-claves">AND</span>');
            codigo = codigo.replace(/(OR|or)(?![^<]*<\/span>)/g, '<span class="show-claves">OR</span>');
            codigo = codigo.replace(/(ALTER|alter)(?![^<]*<\/span>)/g, '<span class="show-claves">ALTER</span>');
            codigo = codigo.replace(/(DROP|drop)(?![^<]*<\/span>)/g, '<span class="show-claves">DROP</span>');
            codigo = codigo.replace(/(BEGIN|begin)(?![^<]*<\/span>)/g, '<span class="show-claves">BEGIN</span>');
            codigo = codigo.replace(/(END|end)(?![^<]*<\/span>)/g, '<span class="show-claves">END</span>');
            codigo = codigo.replace(/(RETURNS|returns)(?![^<]*<\/span>)/g, '<span class="show-claves">RETURNS</span>');
            codigo = codigo.replace(/(RETURN|return)(?![^<]*<\/span>)/g, '<span class="show-claves">RETURN</span>');
            codigo = codigo.replace(/(INT|int)(?![^<]*<\/span>)/g, '<span class="show-claves">INT</span>');
            codigo = codigo.replace(/(VARCHAR|varchar)(?![^<]*<\/span>)/g, '<span class="show-claves">VARCHAR</span>');
            codigo = codigo.replace(/(DECIMAL|decimal)(?![^<]*<\/span>)/g, '<span class="show-claves">DECIMAL</span>');
            codigo = codigo.replace(/(FLOAT|float)(?![^<]*<\/span>)/g, '<span class="show-claves">FLOAT</span>');
            codigo = codigo.replace(/(JOIN|join)(?![^<]*<\/span>)/g, '<span class="show-claves">JOIN</span>');
            codigo = codigo.replace(/(INNER|inner)(?![^<]*<\/span>)/g, '<span class="show-claves">INNER</span>');
            codigo = codigo.replace(/(LEFT|left)(?![^<]*<\/span>)/g, '<span class="show-claves">LEFT</span>');
            codigo = codigo.replace(/(RIGHT|right)(?![^<]*<\/span>)/g, '<span class="show-claves">RIGHT</span>');
            codigo = codigo.replace(/(FULL|full)(?![^<]*<\/span>)/g, '<span class="show-claves">FULL</span>');
            codigo = codigo.replace(/(OUTER|outer)(?![^<]*<\/span>)/g, '<span class="show-claves">OUTER</span>');
            codigo = codigo.replace(/(ON|on)(?![^<]*<\/span>)/g, '<span class="show-claves">ON</span>');
            codigo = codigo.replace(/(GROUP\s+BY|group\s+by)(?![^<]*<\/span>)/g, '<span class="show-claves">GROUP BY</span>');
            codigo = codigo.replace(/(ORDER\s+BY|order\s+by)(?![^<]*<\/span>)/g, '<span class="show-claves">ORDER BY</span>');
            codigo = codigo.replace(/(HAVING|having)(?![^<]*<\/span>)/g, '<span class="show-claves">HAVING</span>');
            codigo = codigo.replace(/(DISTINCT|distinct)(?![^<]*<\/span>)/g, '<span class="show-claves">DISTINCT</span>');
            codigo = codigo.replace(/(PRIMARY|primary)(?![^<]*<\/span>)/g, '<span class="show-claves">PRIMARY</span>');
            codigo = codigo.replace(/(KEY|key)(?![^<]*<\/span>)/g, '<span class="show-claves">KEY</span>');
            codigo = codigo.replace(/(FOREIGN|foreign)(?![^<]*<\/span>)/g, '<span class="show-claves">FOREIGN</span>');
            codigo = codigo.replace(/(CONSTRAINT|constraint)(?![^<]*<\/span>)/g, '<span class="show-claves">CONSTRAINT</span>');
            codigo = codigo.replace(/(UNIQUE|unique)(?![^<]*<\/span>)/g, '<span class="show-claves">UNIQUE</span>');
            codigo = codigo.replace(/(NOT|not)(?![^<]*<\/span>)/g, '<span class="show-claves">NOT</span>');
            codigo = codigo.replace(/(NULL|null)(?![^<]*<\/span>)/g, '<span class="show-claves">NULL</span>');
            codigo = codigo.replace(/(IS|is)(?![^<]*<\/span>)/g, '<span class="show-claves">IS</span>');
            codigo = codigo.replace(/(LIKE|like)(?![^<]*<\/span>)/g, '<span class="show-claves">LIKE</span>');
            codigo = codigo.replace(/(IN|in)(?![^<]*<\/span>)/g, '<span class="show-claves">IN</span>');
            codigo = codigo.replace(/(BETWEEN|between)(?![^<]*<\/span>)/g, '<span class="show-claves">BETWEEN</span>');
            codigo = codigo.replace(/(UNION|union)(?![^<]*<\/span>)/g, '<span class="show-claves">UNION</span>');
            codigo = codigo.replace(/(UNION\s+ALL|union\s+all)(?![^<]*<\/span>)/g, '<span class="show-claves">UNION ALL</span>');
            codigo = codigo.replace(/(EXCEPT|except)(?![^<]*<\/span>)/g, '<span class="show-claves">EXCEPT</span>');
            codigo = codigo.replace(/(INTERSECT|intersect)(?![^<]*<\/span>)/g, '<span class="show-claves">INTERSECT</span>');
            codigo = codigo.replace(/(CASE|case)(?![^<]*<\/span>)/g, '<span class="show-claves">CASE</span>');
            codigo = codigo.replace(/(WHEN|when)(?![^<]*<\/span>)/g, '<span class="show-claves">WHEN</span>');
            codigo = codigo.replace(/(THEN|then)(?![^<]*<\/span>)/g, '<span class="show-claves">THEN</span>');
            codigo = codigo.replace(/(ELSE|else)(?![^<]*<\/span>)/g, '<span class="show-claves">ELSE</span>');
            codigo = codigo.replace(/(BIT|bit)(?![^<]*<\/span>)/g, '<span class="show-claves">BIT</span>');
            codigo = codigo.replace(/(DATETIME|datetime)(?![^<]*<\/span>)/g, '<span class="show-claves">DATETIME</span>');
            codigo = codigo.replace(/(DATE|date)(?![^<]*<\/span>)/g, '<span class="show-claves">DATE</span>');
            codigo = codigo.replace(/(TIME|time)(?![^<]*<\/span>)/g, '<span class="show-claves">TIME</span>');
            codigo = codigo.replace(/(NVARCHAR|nvarchar)(?![^<]*<\/span>)/g, '<span class="show-claves">NVARCHAR</span>');
            codigo = codigo.replace(/(BIGINT|bigint)(?![^<]*<\/span>)/g, '<span class="show-claves">BIGINT</span>');
            codigo = codigo.replace(/(SMALLINT|smallint)(?![^<]*<\/span>)/g, '<span class="show-claves">SMALLINT</span>');
            codigo = codigo.replace(/(TINYINT|tinyint)(?![^<]*<\/span>)/g, '<span class="show-claves">TINYINT</span>');
            codigo = codigo.replace(/(EXEC|exec)(?![^<]*<\/span>)/g, '<span class="show-claves">EXEC</span>');
            codigo = codigo.replace(/(DECLARE|declare)(?![^<]*<\/span>)/g, '<span class="show-claves">DECLARE</span>');
            codigo = codigo.replace(/(SET|set)(?![^<]*<\/span>)/g, '<span class="show-claves">SET</span>');
            codigo = codigo.replace(/(OFFSET|offset)(?![^<]*<\/span>)/g, '<span class="show-claves">OFFSET</span>');
            codigo = codigo.replace(/(FETCH|fetch)(?![^<]*<\/span>)/g, '<span class="show-claves">FETCH</span>');
            codigo = codigo.replace(/(ROWS|rows)(?![^<]*<\/span>)/g, '<span class="show-claves">ROWS</span>');
            codigo = codigo.replace(/(ONLY|only)(?![^<]*<\/span>)/g, '<span class="show-claves">ONLY</span>');
            codigo = codigo.replace(/(CROSS|cross)(?![^<]*<\/span>)/g, '<span class="show-claves">CROSS</span>');
            codigo = codigo.replace(/(CHECK|check)(?![^<]*<\/span>)/g, '<span class="show-claves">CHECK</span>');
            codigo = codigo.replace(/(DEFAULT|default)(?![^<]*<\/span>)/g, '<span class="show-claves">DEFAULT</span>');
            codigo = codigo.replace(/(EXISTS|exists)(?![^<]*<\/span>)/g, '<span class="show-claves">EXISTS</span>');
            codigo = codigo.replace(/(ALL|all)(?![^<]*<\/span>)/g, '<span class="show-claves">ALL</span>');
            codigo = codigo.replace(/(ANY|any)(?![^<]*<\/span>)/g, '<span class="show-claves">ANY</span>');
            codigo = codigo.replace(/(SOME|some)(?![^<]*<\/span>)/g, '<span class="show-claves">SOME</span>');
            codigo = codigo.replace(/(COLLATE|collate)(?![^<]*<\/span>)/g, '<span class="show-claves">COLLATE</span>');
            codigo = codigo.replace(/(PROCEDURE|procedure)(?![^<]*<\/span>)/g, '<span class="show-claves">PROCEDURE</span>');
            codigo = codigo.replace(/(TRIGGER|trigger)(?![^<]*<\/span>)/g, '<span class="show-claves">TRIGGER</span>');
           
            codigo = codigo.replace(/(COMMIT|commit)(?![^<]*<\/span>)/g, '<span class="show-claves">COMMIT</span>');
            codigo = codigo.replace(/(ROLLBACK|rollback)(?![^<]*<\/span>)/g, '<span class="show-claves">ROLLBACK</span>');
            codigo = codigo.replace(/(ASC|asc)(?![^<]*<\/span>)/g, '<span class="show-claves">ASC</span>');
            codigo = codigo.replace(/(DESC|desc)(?![^<]*<\/span>)/g, '<span class="show-claves">DESC</span>');
            codigo = codigo.replace(/(LIMIT|limit)(?![^<]*<\/span>)/g, '<span class="show-claves">LIMIT</span>');
            codigo = codigo.replace(/(TOP|top)(?![^<]*<\/span>)/g, '<span class="show-claves">TOP</span>');
            codigo = codigo.replace(/(WITH|with)(?![^<]*<\/span>)/g, '<span class="show-claves">WITH</span>');
            codigo = codigo.replace(/(AS|as)(?![^<]*<\/span>)/g, '<span class="show-claves">AS</span>');
            codigo = codigo.replace(/(SUM|sum)(?![^<]*<\/span>)/g, '<span class="show-met">SUM</span>');
            codigo = codigo.replace(/(COUNT|count)/g, '<span class="show-met">COUNT</span>');
            codigo = codigo.replace(/(AVG|avg)/g, '<span class="show-met">AVG</span>');
            codigo = codigo.replace(/(MAX|max)/g, '<span class="show-met">MAX</span>');
            codigo = codigo.replace(/(MIN|min)/g, '<span class="show-met">MIN</span>');
            codigo = codigo.replace(/(GRANT|grant)/g, '<span class="show-claves">GRANT</span>');
            codigo = codigo.replace(/(REVOKE|revoke)/g, '<span class="show-claves">REVOKE</span>');
            codigo = codigo.replace(/(INDEX|index)/g, '<span class="show-claves">INDEX</span>');
            codigo = codigo.replace(/(VIEW|view)/g, '<span class="show-claves">VIEW</span>');
            codigo = codigo.replace(/(IDENTITY|identity)/g, '<span class="show-claves">IDENTITY</span>');
            codigo = codigo.replace(/(SCHEMA|schema)/g, '<span class="show-claves">SCHEMA</span>');
            codigo = codigo.replace(/(IF|if)/g, '<span class="show-claves">IF</span>');
            codigo = codigo.replace(/(TRY|try)/g, '<span class="show-claves">TRY</span>');
            codigo = codigo.replace(/(CATCH|catch)/g, '<span class="show-claves">CATCH</span>');
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

