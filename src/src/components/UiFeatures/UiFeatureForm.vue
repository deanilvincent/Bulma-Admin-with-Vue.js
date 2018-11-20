<template>
  <div>
    <h4 class="title is-4">Forms</h4>
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title is-6">Options</p>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>

          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text" placeholder="Text input" value="bulma">
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check"></i>
              </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="radio">
                <input type="radio" name="question">
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="question">
                No
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-parent is-vertical is-5">
        <div class="tile is-child box">
          <p class="title is-6">Colors</p>
          <div class="field">
            <input type="text" placeholder="Primary input" class="input is-primary" />
          </div>
          <div class="field">
            <input type="text" placeholder="Info input" class="input is-info" />
          </div>
          <div class="field">
            <input type="text" placeholder="Success input" class="input is-success" />
          </div>
          <div class="field">
            <input type="text" placeholder="Warning input" class="input is-warning" />
          </div>
          <div class="field">
            <input type="text" placeholder="Danger input" class="input is-danger" />
          </div>
        </div>
        <div class="tile is-child box">
          <p class="title is-6">Sizes</p>
          <div class="field">
            <input type="text" placeholder="Small input" class="input is-small" />
          </div>
          <div class="field">
            <input type="text" placeholder="Normal input" class="input" />
          </div>
          <div class="field">
            <input type="text" placeholder="Medium input" class="input is-medium" />
          </div>
          <div class="field">
            <input type="text" placeholder="Large input" class="input is-large" />
          </div>
        </div>
      </div>
      <div class="tile is-parent is-vertical is-3">
        <div class="tile is-child box">
          <p class="title is-6">States</p>
          <p>Loading</p>
          <div class="field">
            <div class="control is-loading">
              <input class="input" type="text" placeholder="Loading input">
            </div>
          </div>
          <div class="field">
            <div class="control is-loading">
              <textarea class="input" type="text" style="height:120px" placeholder="Loading textarea input"></textarea>
            </div>
          </div>
          <p>Disabled</p>
          <div class="field">
            <input type="text" disabled placeholder="Disabled input" class="input" />
          </div>
          <div class="field">
            <textarea type="text" disabled style="height:120px" placeholder="Disabled input" class="input"></textarea>
          </div>
          <div class="field">
            <label class="checkbox">
              <input type="checkbox" name="remember">
              Remember me
            </label>
          </div>
          <div class="field">
            <label class="radio">
              <input type="radio" name="question">
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question">
              No
            </label>
          </div>
          <button class="button is-primary">Submit</button>
          &nbsp;
          <button class="button">Cancel</button>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title is-6">With Icon</p>
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="Email address">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fa fa-key"></i>
              </span>
            </div>
          </div>
          <a class="is-link" href="https://fontawesome.com/">Font Awesome</a>
        </div>
      </div>
      <div class="tile is-8 is-parent">
        <div class="tile is-child box">
          <p class="title is-6">Cleave.js</p>
          <label class="label">Credit Card #</label>
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="#### #### #### ####" v-cleave="masks.creditCard">
              <span class="icon is-small is-left">
                <i class="fa fa-credit-card"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cleave from '../../../node_modules/cleave.js/dist/cleave.min.js'

const cleave = {
  name: 'cleave',
  bind(el, binding) {
    const input = el.querySelector('input')
    input._vCleave = new Cleave(input, binding.value)
  },
  update(el, binding) {
    const input = el.querySelector('input')
    input._vCleave.destroy()
    input._vCleave = new Cleave(input, binding.value)
  },
  unbind(el) {
    const input = el.querySelector('input')
    input._vCleave.destroy()
  }
}

export default {
  directives: { cleave },
  data() {
    return {
      masks: {
        creditCard: { creditCard: true },
        numeral: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          prefix: '$ '
        },
        custom: {
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
          numericOnly: true
        },
        datePattern: {
          date: true,
          datePattern: ['m', 'y']
        }
      }
    }
  }
}
</script>
