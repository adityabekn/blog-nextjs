export default function Discord() {
    const webhook = async () => {
        console.log("clicked")

        const data = {
            "content": "<@267637619033112577> kamu mendapat pesan dari @user",
            "embeds": [
                {
                    "type": "rich",
                    "color": 0x00FFFF,
                    "title": "Subject",
                    "description": "Type your message here",
                    "fields": [
                        {
                            "name": "Name",
                            "value": "Aditya Bekti Nugroho",
                            "inline": true
                        },
                        {
                            "name": "Email",
                            "value": "bekti.aditya16@gmail.com",
                            "inline": true
                        },
                        {
                            "name": "Phone",
                            "value": "081353331949"
                        },
                        {
                            "name": "Address",
                            "value": "Jl. keadilan no. 48 RT 01/02 Depok"
                        }
                    ]
                }
            ]
        }

        await fetch('https://discord.com/api/webhooks/1100070272817709108/cn2A2D1J0WJBLbr-aDRGszqdX3iMFFhND4bkk4VjN2GPe3KqttaXbGnqvj6g11Fce0wh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }

    return (
        <div>
            <button onClick={webhook}>Make Discord Webhook</button>
        </div>
    )
}