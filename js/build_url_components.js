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
            case '#':
                urlComponents[i].class = "num";
                urlComponents[i].paddingLeft = false;

                if(paras.length > 1)
                {
                    urlComponents[i].start = Number(paras[1]);
                }
                else
                {
                    urlComponents[i].start = 0;
                }
                urlComponents[i].value = urlComponents[i].start - 1;

                if(paras.length > 2)
                {
                    urlComponents[i].end = Number(paras[2]);
                }
                else
                {
                    urlComponents[i].end = Math.pow(10, paras[0].length) - 1;
                }

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

                break;

            default:
                urlComponents[i].class = "const";
                urlComponents[i].urlText = urlBlocks[i];
                urlComponents[i].value = false;
                break;
        }
    }
    
    return urlComponents;
}
