<?php
try {
    // a new MongoDB connection
    $conn = new Mongo('localhost');

    // connect to test database
    $db = $conn->disrupt;

    // a new products collection object
    $collection = $db->transactions;

    // fetch all product documents
    $cursor = $collection->find();

    // How many results found
    $num_docs = $cursor->count();

    if( $num_docs > 0 )
    {
        // loop over the results
        foreach ($cursor as $obj)
        {
            print_r($obj);
            /*
            echo 'Name: ' . $obj['name'] . "\n";
            echo 'Quantity: ' . $obj['quantity'] . "\n";
            echo 'Price: ' . $obj['price'] . "\n";
            */
            echo "\n";
        }
    }
    else
    {
        echo "Nothing found \n";
    }

    // close the connection to MongoDB 
    $conn->close();
}
catch ( MongoConnectionException $e )
{
    // if there was an error, we catch and display the problem here
    echo $e->getMessage();
}
catch ( MongoException $e )
{
    echo $e->getMessage();
}

?>
