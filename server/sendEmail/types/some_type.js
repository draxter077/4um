export default function some_type(data){
    return(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                body{
                    box-sizing:border-box;
                    font-family:system-ui;
                    user-select:none;
                    width:100%;
                    filter:invert(0);
                }
                table,tr,td{
                    text-align:left;
                    margin:none;
                    outline:none;
                    border-spacing:0;
                }
            </style>
        </head>
        <body>
            <table width="100%" align="center">
                <tr style="background-color:rgb(255,255,255);">
                    <td style="padding:20px;border:2px solid rgb(0,0,0);">
                        <span style="font-size:22px;color:rgb(0,0,0);">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </td>
                </tr>

                <tr style="background-color:rgb(0,0,0)">
                    <td style="padding:0px 20px;color:rgb(255,255,255);">
                        <a href="" class="link">
                            <img style="height:40px;vertical-align:middle;" src=""/>
                        </a>
                    </td>
                </tr>

                <tr style="background-color:rgb(0,0,0)">
                    <td style="padding:20px;color:rgb(255,255,255);">
                        <a href="" class="link">
                            <img style="height:30px;margin:0px 0px 0px 20px;vertical-align:middle;" src="">
                        </a>
                    </td>
                </tr>
            </table>
        </body>
    </html>`)
}