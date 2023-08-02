import { useState } from 'react'

export default function Final({fullName, handleChange}) {

    return (
        <div>
            <label htmlFor="finalFullName">Full name</label>
            <input type="text" name='finalFullName' id='finalFullName' value={fullName} onChange={handleChange} />
        </div>
    )
  }