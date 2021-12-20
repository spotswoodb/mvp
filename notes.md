 <Dropzone onDrop={e => console.log(e.dataTransfer)}>
        {({getRootProps, getInputProps}) => {
            return(
                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                </section>
            )
        }}
    </Dropzone>


    Update state using React Hook Form instead. Start here, add new player.
    