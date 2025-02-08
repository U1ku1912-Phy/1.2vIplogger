from flask import Flask, render_template, request
import requests

app = Flask(__name__)

IP_API_URL = "http://ip-api.com/json/"
PHONE_API_URL = "http://apilayer.net/api/validate"
API_KEY = "YOUR_NUMVERIFY_API_KEY"  # API anahtarını buraya koy

def get_ip_location(ip):
    if not ip:
        return None
    response = requests.get(f"{IP_API_URL}{ip}")
    return response.json() if response.status_code == 200 else None

def get_phone_info(phone):
    if not phone:
        return None
    params = {"access_key": API_KEY, "number": phone}
    response = requests.get(PHONE_API_URL, params=params)
    if response.status_code == 200:
        data = response.json()
        if data.get("valid"):
            return {
                "country": data.get("country_name", "Bilinmiyor"),
                "carrier": data.get("carrier", "Bilinmiyor"),
                "region": data.get("location", "Bilinmiyor")
            }
    return None

@app.route("/", methods=["GET", "POST"])
def index():
    ip_info = None
    phone_info = None

    if request.method == "POST":
        ip = request.form.get("ip")
        phone = request.form.get("phone")

        if ip:
            ip_info = get_ip_location(ip)
        if phone:
            phone_info = get_phone_info(phone)

    return render_template("index.html", location=ip_info, phone_info=phone_info)

if __name__ == "__main__":
    app.run(debug=True)
