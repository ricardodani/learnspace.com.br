from fastapi import FastAPI

app = FastAPI()

@app.get("/v1")
def read_root():
    return {"Hello": "World"}

# For Vercel, export the app explicitly
vercel_app = app