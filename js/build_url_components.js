function buildUrlComponents(urlBatch)
{
    var urlBlocks = urlBatch.split(" ");
    var urlComponents = [];

    for(var i = 0; i < urlBlocks.length; i++)
    {
        urlComponents[i] = {};
        paras = urlBlocks[i].split(",");
        
        switch(paras[0].charAt(0))
        {
            // Number
            case '#':
                urlComponents[i].class = "num";
                urlComponents[i].paddingLeft = false;

                // 1st para: start range
                if(paras.length > 1)
                {
                    urlComponents[i].start = Number(paras[1]);
                }
                else
                {
                    urlComponents[i].start = 0;
                }

                // 2nd para: end range
                if(paras.length > 2)
                {
                    urlComponents[i].end = Number(paras[2]);
                }
                else
                {
                    urlComponents[i].end = Math.pow(10, paras[0].length) - 1;
                }

                // 3rd para: padding left
                if(paras.length > 3)
                {
                    switch(paras[3])
                    {
                        case "l":
                            urlComponents[i].paddingLeft = true;
                            urlComponents[i].paddingLength = paras[0].length;
                            break;
                    }
                }

                // 4th para: step value
                if(paras.length > 4)
                {
                    urlComponents[i].step = Number(paras[4]);
                }
                else
                {
                    urlComponents[i].step = 1;
                }

                urlComponents[i].pointer = urlComponents[i].start;

                break;

            // Enum
            case "@":
                urlComponents[i].class = "enum";
                urlComponents[i].enum = [];
                for(var nEnum = 1; nEnum < paras.length; nEnum++)
                {
                    urlComponents[i].enum.push(paras[nEnum]);
                }
                urlComponents[i].pointer = 0;

                break;

            // Const
            default:
                urlComponents[i].class = "const";
                urlComponents[i].urlText = urlBlocks[i];
                urlComponents[i].pointer = true;

                break;
        }
    }
    
    return urlComponents;
}
