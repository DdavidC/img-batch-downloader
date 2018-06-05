function showUrlImgTable(urlComponents)
{
    var tableUrlImg = document.getElementById("tableUrlImg");
    var NewRow;

    tableUrlImg.innerHTML = "";

    // Row 0: Table title
    NewRow = "<tr><td>網址</td><td>圖片</td></tr>";
    $("#tableUrlImg").append(NewRow);

    stackPointer = 0;
    while(true)
    {
        if(stackPointer == urlComponents.length)
        {
            NewRow = "<tr>";

            NewRow += "<td>";
            for(var i = 0; i < urlComponents.length; i++)
            {
                NewRow += urlComponents[i].urlText;
            }
            NewRow += "</td>";

            NewRow += "<td><img src=\""
            for(var i = 0; i < urlComponents.length; i++)
            {
                NewRow += urlComponents[i].urlText;
            }
            NewRow += "\"></td>";
            
            NewRow += "</tr>";
            $("#tableUrlImg").append(NewRow);

            stackPointer--;
            continue;
        }

        switch(urlComponents[stackPointer].class)
        {
            case "const":
                if(urlComponents[stackPointer].value == 0)
                {
                    urlComponents[stackPointer].value = 1;
                    stackPointer++;
                }
                else
                {
                    urlComponents[stackPointer].value = 0;
                    stackPointer--;
                }

                break;

            case "num":
                if(urlComponents[stackPointer].value < urlComponents[stackPointer].end)
                {
                    urlComponents[stackPointer].value++;
                    if(urlComponents[stackPointer].paddingLeft)
                    {
                        urlComponents[stackPointer].urlText = 
                            paddingLeftZero(urlComponents[stackPointer].value.toString(), urlComponents[stackPointer].paddingLength);
                    }
                    else
                    {
                        urlComponents[stackPointer].urlText = urlComponents[stackPointer].value.toString();
                    }
                    stackPointer++;
                }
                else
                {
                    urlComponents[stackPointer].value = urlComponents[stackPointer].start - 1;
                    stackPointer--;
                }
                break;
        }

        if(stackPointer < 0)
        {
            break;
        }
    }
}

function paddingLeftZero(str, lenght)
{
    if(str.length >= lenght)
    {
        return str;
    }
    else
    {
        return paddingLeftZero("0" + str, lenght);
    }
}
