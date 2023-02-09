  # sub r c rows cols
  #   Take a square subset of the CSV, top left at row r, column c, which
  #   is rows deep and cols wide.  'r' and 'c' count from 1, or
  #   from 0 if -z option is given.

  # sub 1 1 3 5
  # 1 start top row
  # 1 start left column
  # 2 rows (1 row without header)
  # 2 columns

csvtool width api/src/cql/Data-Table\ 1.csv
csvtool height api/src/cql/Data-Table\ 1.csv
echo
cat api/src/cql/Data-Table\ 1.csv | csvtool sub 1 1 1200 740 - > zzz.tmp.csv
# cat api/src/cql/Data-Table\ 1.csv | csvtool sub 1 1 200 740 - > zzz.tmp.csv
csvtool width zzz.tmp.csv
csvtool height zzz.tmp.csv
echo
cat zzz.tmp.csv | docker exec -i `docker ps | grep neo4j | awk '{print $1}'` bash -c "cat > '/var/lib/neo4j/import/Data-Table 1.csv'"

# echo 'CALL apoc.load.csv("Data-Table 1.csv", {sep: ",", compression: "NONE", limit: 5, header: true, quoteChar: '"'"'"'"'"'}) YIELD map RETURN map' | docker exec -i `docker ps | grep neo4j | awk '{print $1}'` cypher-shell -u neo4j -p letmein --format verbose

# echo 'CALL apoc.load.csv("Data-Table 1.csv", {sep: ",", compression: "NONE", header: true, quoteChar: '"'"'"'"'"'}) YIELD map RETURN size(keys(map)), count(map)' | docker exec -i `docker ps | grep neo4j | awk '{print $1}'` cypher-shell -u neo4j -p letmein --format verbose

pwd

cat api/src/cql/load_imic.cql | docker exec -i `docker ps | grep neo4j | awk '{print $1}'` cypher-shell -u neo4j -p letmein --format verbose