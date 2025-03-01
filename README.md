# myUrl
url shortner



curl api test:

curl -X POST http://localhost:3000/shorten \
     -H "Content-Type: application/json" \
     -d '{"longUrl": "https://example.com/thisisanexampleoflongurl"}'




MONGODB check:

// Connect to docker mongodb container
1) docker exec -it url-shortener-db mongosh
    show dbs
    use shortener
    show collections
2) db.urls.find().pretty()
3) exit
