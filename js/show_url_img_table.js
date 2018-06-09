function showUrlImgTable(urlComponents)
{
    var tableUrlImg = document.getElementById("tableUrlImg");
    var NewRow;

    tableUrlImg.innerHTML = "";

    // Row 0: Table title
    NewRow = "";
    $("#tableUrlImg").append(NewRow);

    stackPointer = 0;
    while(true)
    {
        if(stackPointer == urlComponents.length)
        {
            var newUrl = "";
            for(var i = 0; i < urlComponents.length; i++)
            {
                newUrl += urlComponents[i].urlText;
            }

            NewRow = "<tr>"
            NewRow += "<td>" + newUrl + "</td>";
            NewRow += "<td><a href=\"" + newUrl + "\" target=\"_blank\" download><img src=\"" + newUrl + "\" /></a></td>";
            NewRow += "</tr>";

            $("#tableUrlImg").append(NewRow);

            stackPointer--;
            continue;
        }

        switch(urlComponents[stackPointer].class)
        {
            // Const
            case "const":
                if(urlComponents[stackPointer].pointer)
                {
                    urlComponents[stackPointer].pointer = false;
                    stackPointer++;
                }
                else
                {
                    urlComponents[stackPointer].pointer = true;
                    stackPointer--;
                }

                break;

            // Number
            case "num":
                if(urlComponents[stackPointer].pointer <= urlComponents[stackPointer].end)
                {
                    if(urlComponents[stackPointer].paddingLeft)
                    {
                        urlComponents[stackPointer].urlText = 
                            paddingLeftZero(urlComponents[stackPointer].pointer.toString(), urlComponents[stackPointer].paddingLength);
                    }
                    else
                    {
                        urlComponents[stackPointer].urlText = urlComponents[stackPointer].pointer.toString();
                    }
                    urlComponents[stackPointer].pointer += urlComponents[stackPointer].step;
                    stackPointer++;
                }
                else
                {
                    urlComponents[stackPointer].pointer = urlComponents[stackPointer].start;
                    stackPointer--;
                }

                break;

            // Enum
            case "enum":
                if(urlComponents[stackPointer].pointer < urlComponents[stackPointer].enum.length)
                {
                    urlComponents[stackPointer].urlText = urlComponents[stackPointer].enum[urlComponents[stackPointer].pointer];
                    urlComponents[stackPointer].pointer++;
                    stackPointer++;
                }
                else
                {
                    urlComponents[stackPointer].pointer = 0;
                    stackPointer--;
                }

                break;
        }

        if(stackPointer <= 0)
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
