import React from 'react'

export default function Status({ status }) {

    return (
        <div class="status-grid">
            {
                status.map(block => (
                    <div class="each-status-grid">
                        <div class="status-text">{block.label}</div>
                        <div class="status-num">{block.value}</div>
                    </div>
                ))
            }
        </div>
    )
}
