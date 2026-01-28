/*!
 * Show Code v2.5.2
 * Copyright Federico Manzano
 * Licencia MIT
 * Repositorio (https://github.com/FedeManzano/show-code)
 */

import CodigoHtml from "./modulos/CodigoHtml"
import CodigoCss from "./modulos/CodigoCss"
import CodigoJs from "./modulos/CodigoJs"
import CodigoJava from "./modulos/CodigoJava"
import CodigoC from "./modulos/CodigoC"
import CodigoSql from "./modulos/CodigoSql"

(function () {
    const ShowHtml = (conf) => {
        CodigoHtml.iniciar(conf)
    }

    const ShowCss = (conf) => {
        CodigoCss.iniciar(conf)
    }

    const ShowJs = (conf) => {
        CodigoJs.iniciar(conf)
    }

    const ShowJava = (conf) => {
        CodigoJava.iniciar(conf)
    }

    const ShowC = (conf) => {
        CodigoC.iniciar(conf)
    }

    const ShowSql = (conf) => {
        CodigoSql.Init(conf)
    }

    const Show = {
        ShowHtmlInit: (conf) => ShowHtml(conf),
        ShowCssInit: (conf) => ShowCss(conf),
        ShowJsInit: (conf) => ShowJs(conf),
        ShowJavaInit: (conf) => ShowJava(conf),
        ShowCInit: (conf) => ShowC(conf),
        ShowSqlInit: (conf) => ShowSql(conf)
    }

    window.Show = Show
})()

export default Show